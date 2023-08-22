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

    const refreshCart = () => {
        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())
    }

    const addCart = (gameId) => {
        cartCtrl.add(gameId)
        refreshCart()
    }

    const deleteItem = (gameId) => {
        cartCtrl.delete(gameId)
        refreshCart()
    }
    
    const deleteAllItems = () => {
        cartCtrl.deleteAll()
        refreshCart()
    }

    const changeQuantityItems = (gameId, quantity) => {
        cartCtrl.changueQuantity(gameId, quantity)
        refreshCart()
    }    

    const data = {
        cart: cart,
        addCart: addCart,
        total: total,
        deleteItem: deleteItem,
        deleteAllItems: deleteAllItems,
        changeQuantityItems: changeQuantityItems
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
