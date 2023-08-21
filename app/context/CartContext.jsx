'use client'
import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({children}) {

    const [cart, setCart] = useState(null)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        //TODO obtener carrito
    }, [])

    const addCart = () => {}
    const deleteItem = () => {}
    const deleteAllItems = () => {}
    const changeQuantityItems = () => {}    

    const data = {
        cart: cart,
        addCart: () => {},
        total: total,
        deleteItem: () => {},
        deleteAllItems: () => {},
        changeQuantityItems: () => {}
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
