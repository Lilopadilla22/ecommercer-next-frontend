'use client'
import {Button, Icon, Label} from 'semantic-ui-react'
import { useRouter} from 'next/navigation'
import {useAuth, useCart} from '../../../hook'
import classNames from 'classnames'
import styles from './Account.module.scss'



export default function Account() {

    const router = useRouter ()
    const {user} = useAuth()
    const {total} = useCart()

    const goToLogin = () => router.push('/join/sign-in')
    const goToAccount = () => router.push('/account')
    const goToCart = () => {
        if(!user) goToLogin()
        else router.push('/cart?step=1')
    }

  return (
    <div className={styles.account}>
        <Button icon className={styles.cart}>
            <Icon name='cart' onClick = {goToCart}/>
            {total > 0 && <Label circular>{total}</Label>}
        </Button>

        <Button icon className={classNames({[styles.user]: user})}>
          <Icon name='user outline' onClick={user ? goToAccount : goToAccount}/>
        </Button>
    </div>
  )
}
