'use client'
import Link from 'next/link'
import styles from './HeaderCart.module.scss'
import { map } from 'lodash'
import { Icon, Image } from 'semantic-ui-react'
import {  useSearchParams } from 'next/navigation'
import classNames from 'classnames'

export function HeaderCart() {

    const currentStep = useSearchParams().get('step')

    const steps = [
        {number: 1, title: 'Carrito'},
        {number: 2, title: 'Pago'},
        {number: 3, title: 'Confirmación'}
    ]
  return (
    <div className={styles.headerCart}>
        <div className={styles.left}>
            <Link href='./'>
                <Image src='/images/logo.png' alt='gaming'/>
            </Link>
        </div>

        <div className={styles.center}>
            {map(steps, (step) => (
                <div key={step.number} className={classNames({
                    [styles.active]: step.number === Number(currentStep),
                    [styles.success]: step.number < Number(currentStep)
                })}>
                    <span className={styles.number}>
                        <Icon name='check'/>
                        {step.number}
                    </span>
                    <span>
                        {step.title}
                    </span>
                    <span className={styles.space}/>
                </div>
            ))}
        </div>
        <div className={styles.right}>
            <Icon name='lock'/>
            <div>
                <span>Pago Seguro</span>
                <span>256-bit SSL Secure</span>
            </div>
        </div>
    </div>
  )
}
