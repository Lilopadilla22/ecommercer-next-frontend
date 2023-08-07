import Link from 'next/link'
import styles from './sign-up.module.scss'
import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm'


export default function SignUp  ()  {
    return (
      <div className={styles.containerSignUp}>
        <h3>
          Crear Cuenta
        </h3>
        <RegisterForm/> 
        <div className={styles.containerActions}>
          <Link href='./sign-in'>Atras</Link>
        </div>
      </div>
    )
  }
