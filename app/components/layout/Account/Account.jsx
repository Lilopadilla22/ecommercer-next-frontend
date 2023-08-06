'use client'
import {Button, Icon, Label} from 'semantic-ui-react'
import { useRouter} from 'next/navigation'
import {useAuth} from '@/app/hook'
import styles from './Account.module.scss'

const total = 5

export default function Account() {

    const router = useRouter ()
    const {user} = useAuth()

    const goToLogin = () => router.push('/join/sign-in')
    const goToAccount = () => router.push('/account')
    const goToCart = () => {
        if(!user) goToLogin()
        else router.push('/cart')
    }

  return (
    <div className={styles.account}>
        <Button icon className={styles.cart}>
            <Icon name='cart' onClick = {goToCart}/>
            {total > 0 && <Label circular>{total}</Label>}
        </Button>

        {
        !user ? (
          <Button icon>
            <Icon name='user outline' onClick={goToLogin}/>
          </Button>
        ) : (
          <Button icon className={styles.user}>
            <Icon name='user outline' onClick={goToAccount}/>
          </Button>
        )

        }
    </div>
  )
}
