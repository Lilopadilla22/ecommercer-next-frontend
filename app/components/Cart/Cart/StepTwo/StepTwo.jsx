'use client'
import { useState } from 'react'
import { Separator } from '../../../Shared'
import { Addresses } from './Addresses'
import styles from './StepTwo.module.scss'

export function StepTwo({games}) {

  const [addressSelected, setAddressSelected] = useState(null)

  return (
    <div className={styles.stepTwo}>
      <div className={styles.center}>
        <Addresses addressSelected={addressSelected} setAddressSelected={setAddressSelected} />
        <Separator height={50}/>
        {addressSelected && <p>PAYMET</p>}
      </div>

      <div className={styles.right}>
        <p>Resumen</p>
      </div>
    </div>
  )
}
