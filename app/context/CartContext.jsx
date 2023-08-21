'use client'
import { createContext, useEffect, useState } from 'react'
import { Cart } from '../api'

const cartCtrl = new Cart()

export const CartContext = createContext()

export function CartProvider({children}) {

    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(0)

    useEffect(() => {
       const response = cartCtrl.getAll()
       setCart(response)
    }, [])

    const addCart = (gameId) => {
        cartCtrl.add(gameId)
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
