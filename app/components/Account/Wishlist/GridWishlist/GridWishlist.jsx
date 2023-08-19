import Link from 'next/link'
import styles from './GridWishlist.module.scss'
import { map } from 'lodash'
import { ENV, fn } from '../../../../utils'
import { Label, WishlistIcon } from '../../../Shared'


export function GridWishlist({wishList, onReload}) {

  return (
    <div className={styles.gridGames}>
      {map (wishList, (item) => {
        const game = item.attributes.game.data
        const cover = game.attributes.cover.data
        return (
            <div key={item.id} className={styles.game}>
                <Link href={`/${game.attributes.slug}`}>
                    <div>
                        <img src={`${ENV.SERVER_HOST}${cover.attributes.url}`}/>
                        {
                            game.attributes.discount > 0 && (
                                <Label.Discount className={styles.discount}>
                                    {`-${game.attributes.discount}%`}
                                </Label.Discount>
                            )
                        }
                    </div>
                    <div>
                        <span>{game.attributes.title}</span>
                        <span className={styles.price}>
                            $ {fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}
                        </span>
                    </div>
                </Link>

                <WishlistIcon gameId={game.id} className={styles.wishlistIcon} removeCallback={onReload}/>
            </div>
        )
      })}
    </div>
  )
}
