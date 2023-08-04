'use client'
import { createContext, useEffect, useState } from 'react'
import { Token, User } from '../api'

export const AuthContext = createContext()
const tokenCtrl = new Token()
const userCtrl = new User()

export function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const token = tokenCtrl.getToken()

            if(!token) {
                logout()
                setLoading(false)
                return
            }

            if(tokenCtrl.hasExpired(token)) {
                logout()
            } else {
                await login(token)
            }
        })()
    }, [])
    
    const login = async (token) => {
        try {
            tokenCtrl.setToken(token)
            const responseUser = await userCtrl.getMe()
            setUser(responseUser)
            setToken(token)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
        }
    }

    const logout = () => {
        console.log('cerrar sesion')
    }

    const data ={
        accessToken: token,
        user, 
        login,
        logout,
        updateUser: null
    }

    if (loading) return null 

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
