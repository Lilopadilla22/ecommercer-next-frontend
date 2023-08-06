'use client'
import Link from 'next/link'
import { Image } from 'semantic-ui-react'
import styles from './TopBar.module.scss'
import Account from '../Account/Account'
import Menu from '../Menu/Menu'

export default function TopBar({isOpenSearch}) {

  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="./">
          <Image src='/images/logo.png' alt= 'gamming'/>
        </Link>
      </div>

      <div className={styles.center}>
        <Menu isOpenSearch={isOpenSearch}/>
      </div>

      <div className={styles.right}>
        <Account/>
      </div>
    </div>
  )
}