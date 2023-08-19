import { useEffect, useState } from 'react'
import { Wishlist as WishlistCtrl } from '../../../api'
import { useAuth } from '../../../hook'
import { size } from 'lodash'
import { GridWishlist } from './GridWishlist'
import { NoResult } from '../../Shared'

const wishlistCtrl = new WishlistCtrl()

export function Wishlist() {

    const [wishList, setWishList] = useState(null)
    const [reload, setReload] = useState(false)
    const { user } = useAuth()
    const onReload = () => setReload((prevState) => !prevState)

    useEffect(() => {
      (async () => {
        try {
            const response = await wishlistCtrl.getAll(user.id)
            setWishList(response)
        } catch (error) {
            console.error(error)
        }
      })()
    }, [reload])  
    
  return size(wishList) === 0 ? (<NoResult text='No tienes favoritos'/>) : (<GridWishlist wishList={wishList} onReload={onReload}/>)
}
