'use client'
import { Button, Container, Icon, Image } from 'semantic-ui-react'
import styles from './panel.module.scss'
import { ENV, fn } from '../../../../utils'


export default function Panel(props) {

  const {gameId, game} = props
  const image = `${ENV.SERVER_HOST}${game.cover.data.attributes.url}`
  const platform = game.platform.data
  const platformIcon = `${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}` 
  const discount = game.discount
  const price = game.price
  const buyPrice = fn.calcDiscountedPrice(price, discount)

  return (
    <Container className={styles.containerPanel}>
      <div className={styles.containerImg}>
        <Image src ={image}/>
      </div>
      <div className={styles.actionsContainer}>
        <div>
          <h2>
            {game.title}
          </h2>
          <div className={styles.moreInfo}>
            <span>
              <Image src ={platformIcon}/>
              {platform.attributes.title}
            </span>
            <span>
              <Icon name='check'/>
              En stock
            </span>
          </div>

          <div className={styles.price}>
            {
              discount > 0 && (
                <>
                  <span className={styles.originalPrice}>
                    <Icon name='tag'/>
                    $ {price}
                  </span>

                  <span className={styles.discount}>
                    -{discount}%
                  </span>
                </>
              )
            }
            <span className={styles.price}> $ {buyPrice} </span>
          </div>

          <Button primary fluid>
            Comprar ahora!
          </Button>
          
        </div>
      </div>
    </Container>
  )
}


// {
//   gameId: 8,
//   game: {
//     title: 'Sonic Frontiers',
//     price: 90,
//     discount: 19,
//     slug: 'sonic-frontiers',
//     summary: 'Sonic Frontiers​ es un videojuego de plataformas de 2022 desarrollado por Sonic Team y publicado por Sega. Como Sonic, el jugador explora las islas Starfall para recolectar las Chaos Emeralds, después de que Sonic y sus amigos se separan al caer a través de un agujero de gusano.',
//     video: 'https://www.youtube.com/watch?v=a09DmiWjmjc',
//     releaseDate: '2022-05-31',
//     createdAt: '2023-08-02T21:38:32.018Z',
//     updatedAt: '2023-08-02T21:38:34.236Z',
//     publishedAt: '2023-08-02T21:38:34.231Z',
//     wallpaper: { data: [Object] },
//     cover: { data: [Object] },
//     screenshots: { data: [Array] },
//     platform: { data: [Object] }
//   }
// } PANEL