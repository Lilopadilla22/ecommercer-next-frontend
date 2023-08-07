'use client'
import React, { useEffect, useState } from 'react'
import { Game } from '../../../../api'
import { Container, Image } from 'semantic-ui-react'
import styles from './BannerLastGamePublished.module.scss'

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
  
  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url}/>

    </div>
  )
}
