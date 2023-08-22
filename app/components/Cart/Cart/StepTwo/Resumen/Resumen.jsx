'use client'
import { useState, useEffect } from 'react'
import { forEach, map } from 'lodash'
import styles from './Resumen.module.scss'
import { fn } from '../../../../../utils'
import { Button } from 'semantic-ui-react'

export function Resumen({games, addressSelected}) {

    const [total, setTotal] = useState(null)

    useEffect(() => {
        let totalTemp = 0
        forEach(games, (game) => {
            const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)
            totalTemp += price * game.quantity
        })
        setTotal(totalTemp.toFixed(2))
    }, [games])

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

        <Button primary fluid disabled={!addressSelected}>
            Pagar
        </Button>
      </div>
    </div>
  )
}
