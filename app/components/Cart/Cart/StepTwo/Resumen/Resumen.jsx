'use client'
import { useState, useEffect } from 'react'
import { forEach, map } from 'lodash'
import { fn } from '../../../../../utils'
import { Button } from 'semantic-ui-react'
import { useRouter, usePathname } from 'next/navigation'
import { Cart } from '../../../../../api'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useAuth, useCart } from '../../../../../hook'
import styles from './Resumen.module.scss'

const cartCtrl = new Cart

export function Resumen({games, addressSelected}) {

    const [total, setTotal] = useState(null)
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const { deleteAllItems } = useCart()
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        let totalTemp = 0
        forEach(games, (game) => {
            const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)
            totalTemp += price * game.quantity
        })
        setTotal(totalTemp.toFixed(2))
    }, [games])

    const onPay = async () => {
        setLoading(true)

        if(!stripe || !elements) {
            setLoading(false)
            return
        }

        const cardElement = elements.getElement(CardElement)
        const result = await stripe.createToken(cardElement)

        if(result.error) {
            console.error(result.error.message)
        } else {
            const response = await cartCtrl.paymentCart(result.token, games, user.id, addressSelected)

            if(response.status === 200) {
                deleteAllItems()
                goToStepEnd()
            } else {
                console.error('Error al realizar el pedido')
            }
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const goToStepEnd = () => {
        router.push(`${pathname}?step=${3}`)
    }

    if(!total) return null 
    
  return (
    <div className={styles.resumen}>
      <h2>Resumen</h2>

      <div className={styles.block}>
        <div className={styles.products}>
            {map(games, (game)=> (
                <div key={game.id} className={styles.product}>
                    <div>
                        <p>{game.attributes.title}</p>
                        <span>{game.attributes.platform.data.attributes.title}</span>
                    </div> 
                    <span>
                        ${game.quantity > 0 && `${game.quantity}x`}
                        {fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}
                    </span>
                </div>
            ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
            <span>TOTAL</span>
            <span>$ {total}</span>
        </div>

        <Button primary fluid disabled={!addressSelected} onClick={onPay} loading={loading}>
            Pagar
        </Button>
      </div>
    </div>
  )
}
