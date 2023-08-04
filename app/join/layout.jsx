'use client'
import Link from 'next/link'
import styles from './layout.module.scss'
import { useRouter } from "next/navigation"
import { useAuth } from '../hook'
import {Icon, Image} from 'semantic-ui-react'

export default function layout({ children }) {

  const {user} = useAuth()
  const router = useRouter()

  if(user) router.push('/')

    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href='/'>
            <Image src="/images/logo.png" alt="Gaming" />
          </Link>
          <Link href='/'>
            <Icon name="close" />
          </Link>
        </div>
        <div className={styles.blockLeft}>{children}</div>
        <div className={styles.blockRight}></div>
      </div>
    )
}