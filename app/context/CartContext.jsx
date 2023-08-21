'use client'
import { createContext, useEffect, useState } from 'react'
import { Cart } from '../api'

const cartCtrl = new Cart()

export const CartContext = createContext()

export function CartProvider({children}) {

    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(cartCtrl.count())


    useEffect(() => {
       const response = cartCtrl.getAll()
       setCart(response)
    }, [])

    const addCart = (gameId) => {
        cartCtrl.add(gameId)
        refreshCart()
    }

    const refreshCart = () => {
        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())
    }

    const deleteItem = () => {}
    const deleteAllItems = () => {}
    const changeQuantityItems = () => {}    

    const data = {
        cart: cart,
        addCart: addCart,
        total: total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItems: () => {}
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
