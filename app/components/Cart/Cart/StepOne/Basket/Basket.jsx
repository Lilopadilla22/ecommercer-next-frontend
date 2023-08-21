'use client'
import { Dropdown, Icon, Image } from 'semantic-ui-react'
import styles from './Basket.module.scss'
import { map } from 'lodash'
import { ENV, fn } from '../../../../../utils'

export function Basket({games}) {

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>
      <div className={styles.block}>
        {map(games, (game)=> (
          <div key={game.id} className={styles.product}>
            <Image src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{game.attributes.title}</p>
                  <p>{game.attributes.platform.data.attributes.title}</p>
                </div>
                <Icon name='trash alternate online' link/>
              </div>
              <div className={styles.quantity}>
                <Dropdown 
                  className='number' 
                  options={[]} 
                  selection 
                  value={null} 
                  compact
                />
                <span>
                  ${fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
