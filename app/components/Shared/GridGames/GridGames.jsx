'use client'
import styles from './GridGames.module.scss'
import { Label } from '../Label'
import { map } from 'lodash'
import Link from 'next/link'
import { ENV, fn } from '../../../utils'


export default function GridGames({games}) {

  return (
    <div className={styles.gridGames}>
      {
        map(games, (game)=> (
            <Link key={game.id} href={`${game.attributes.slug}`} className={styles.game}>
                <div>
                    <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`}/>
                    {game.attributes.discount > 0 && (
                        <Label.Discount className={styles.discount}>
                            {`-${game.attributes.discount}%`}
                        </Label.Discount>
                    )}
                </div>

                <div>
                    <span>
                        {game.attributes.title}
                    </span>
                    <span className={styles.price}>
                        ${fn.calcDiscountedPrice(game.attributes.price, game.attributes.Discount)}
                    </span>
                </div>
            </Link>
        ))
      }
    </div>
  )
}
