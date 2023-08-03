'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.scss'
import {Icon} from 'semantic-ui-react'

export default function layout({ children }) {
    
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href='/'>
            <Image src="/images/logo.png" width={100} height={60}/> 
          </Link>
          <Link href='/'>
            X
          </Link>
        </div>
        <div className={styles.blockLeft}>{children}</div>
        <div className={styles.blockRight}></div>
      </div>
    )
}