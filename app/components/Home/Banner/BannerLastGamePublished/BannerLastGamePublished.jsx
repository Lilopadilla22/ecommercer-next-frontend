'use client'
import React, { useEffect, useState } from 'react'
import { Game } from '../../../../api'
import { Container, Image } from 'semantic-ui-react'
import {DateTime} from 'luxon'
import styles from './BannerLastGamePublished.module.scss'
import { ENV, fn } from '../../../../utils'
import Link from 'next/link'
import {Label} from '../../../Shared/Label'

const gameCtrl = new Game()

export default function BannerLastGamePublished() {

  const [game, setGame] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished()
        setGame(response.data[0])
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  if(!game) return null

  const wallpaper = game.attributes.wallpaper
  const releaseDate = new Date(game.attributes.releaseDate).toISOString()

  const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)
  
  return (
    <div className={styles.container}>
      <Image src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`} className={styles.wallpaper}/>
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({days: 1}).toRelative()}
          </span>
          <h2>
            {game.attributes.title}
          </h2>
          <p className={styles.price}>
            <Label.Discount>
              {game.attributes.discount}%
            </Label.Discount>
            <span className={styles.finalPrice}>
              ${price}
            </span>
          </p>
        </Container>
      </Link>

    </div>
  )
}
