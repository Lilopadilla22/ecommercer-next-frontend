'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { forEach } from 'lodash'
import styles from './Resumen.module.scss'
import { fn } from '../../../../../utils'
import { Button } from 'semantic-ui-react'
import Link from 'next/link'

export function Resumen({games}) {

  const router = useRouter()
  const pathname = usePathname()

  const [totals, setTotals] = useState(null)

  useEffect(() => {
    let totals = {
      original: 0,
      discount: 0,
      price: 0
    }

    forEach(games, (game) => {
      const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)

      totals = {
        original: totals.original + game.attributes.price * game.quantity,
        discount: totals.discount + (game.attributes.price- price) * game.quantity,
        price: totals.price + price * game.quantity
      }
    });

    setTotals(totals)

  }, [games])
  
  if(!totals) return null 

  const goToStepTwo = () => {
    router.push(`${pathname}?step=${2}`)
  }

  return (
    <div className={styles.resumen}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.price}>
          <div>
            <span>Precio Oficial</span>
            <span> $ {totals.original.toFixed(2)}</span>
          </div>
          <div>
            <span>Descuento</span>
            <span> $ {totals.discount.toFixed(2)}</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span> $ {totals.price.toFixed(2)}</span>
          </div>
        </div>

        <Button primary fluid onClick={goToStepTwo}>
          Proceder con el pago
        </Button>
        <Link href='/'> Seguir comprando </Link>
      </div>
    </div>
  )
}
