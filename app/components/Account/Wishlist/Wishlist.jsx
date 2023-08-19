import { useEffect, useState } from 'react'
import { Wishlist as WishlistCtrl } from '../../../api'
import { useAuth } from '../../../hook'

const wishlistCtrl = new WishlistCtrl()

export function Wishlist() {

    const [wishList, setWishList] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
      (async () => {
        try {
            const response = await wishlistCtrl.getAll(user.id)
            console.log(response, 'REsPONSEEEEEEEEEEEEEE')
        } catch (error) {
            console.error(error)
        }
      })()
    }, [])  
    
  return (
    <div>
      Soy la Wishlist
    </div>
  )
}
