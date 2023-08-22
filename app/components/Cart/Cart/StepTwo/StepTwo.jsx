'use client'
import { useState } from 'react'
import { Separator } from '../../../Shared'
import { Addresses } from './Addresses'
import { Payment } from './Payment'
import { Resumen } from './Resumen'
import { loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { ENV } from '../../../../utils'
import styles from './StepTwo.module.scss'


const stripePromise = loadStripe(ENV.STRIPE_TOKEN)

export function StepTwo({games}) {

  const [addressSelected, setAddressSelected] = useState(null)

  return (
    <Elements stripe={stripePromise}>
      <div className={styles.stepTwo}>
        <div className={styles.center}>
          <Addresses addressSelected={addressSelected} setAddressSelected={setAddressSelected} />
          <Separator height={50}/>
          {addressSelected && <Payment />}
        </div>

        <div className={styles.right}>
          <Resumen addressSelected={addressSelected} games={games} />
        </div>
      </div>
    </Elements>
  )
}
