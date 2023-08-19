'use client'
import { Icon } from 'semantic-ui-react'
import styles from './WishlistIcon.module.scss'
import classNames from 'classnames'
import { Wishlist } from '../../../api'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../hook/useAuth'

const wishlistCtrl = new Wishlist()

export function WishlistIcon({gameId, className}) {

  const {user} = useAuth()

  const [hasWishlist, setHasWishlist] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await wishlistCtrl.check( user.id, gameId)

        setHasWishlist(response)
      } catch (error) {
        console.error(error)
        setHasWishlist(false)
      }
    })()
  }, [gameId])

  const addWishliist = () => {console.log('aawishlist')}
  const deleteWishliist = () => {console.log('deletewishlist')}
  
  if(hasWishlist === null) return null;

  return (
    <Icon 
      name={hasWishlist ? "heart" : "heart outline"}
      onClick= {hasWishlist ? deleteWishliist : addWishliist}
      className={classNames(styles.wishlisticon, {[className]: className})}/>
  )
}
