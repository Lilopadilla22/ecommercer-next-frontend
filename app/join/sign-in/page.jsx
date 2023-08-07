import React from 'react'
import Link from 'next/link'
import styles from './sign-in.module.scss'
import {LoginForm} from '../../components/Auth/LoginForm'

export default function Page  ()  {
  return (
    <div className={styles.signIn}>
      <h3>
        Iniciar Sesion
      </h3>
      <div>
        <LoginForm/>
      </div>
      <div className={styles.actions}> 
        <Link href='/join/sign-in'>
          ¿No  tienes una cuenta?
        </Link>
      </div>
    </div>
  )
}
