'use client'
import { Icon } from 'semantic-ui-react'
import styles from './WishlistIcon.module.scss'
import classNames from 'classnames'

export function WishlistIcon({gameId, className}) {


  return (
    <Icon name='heart' className={classNames(styles.wishlisticon, {[className]: className})}/>
  )
}
