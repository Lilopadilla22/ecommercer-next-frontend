'use client'
import { Container } from 'semantic-ui-react'
import styles from './Info.module.scss'

export default function Info({game}) {

    console.log(game, 'GAMEEEEEEEEEEEEE')

  return (
    <Container className={styles.containerInfo}>
        <div className={styles.summary}>
           <p>
            {game.summary}
           </p>
        </div>
        <div className={styles.more}>
            <ul>
                <li>
                    <span> Fecha de Lanzamiento: </span> {game.releaseDate}
                </li>
            </ul>
        </div>

    </Container>
  )
}


// {
//     title: 'Forspoken',
//     price: 34,
//     discount: null,
//     slug: 'forspoken',
//     summary: 'Forspoken narra la historia de Frey, una joven neoyorquina que acaba en el hermoso y cruel mundo de Athia. Mientras averigua cómo volver a casa, tendrá que usar sus nuevas dotes mágicas para recorrer paisajes enormes y enfrentarse a seres monstruosos',
//     video: 'https://www.youtube.com/watch?v=1oAF8JkXBNo',
//     releaseDate: '2023-01-24',
//     createdAt: '2023-08-02T21:30:30.475Z',
//     updatedAt: '2023-08-02T21:30:31.544Z',
//     publishedAt: '2023-08-02T21:30:31.541Z',
//     wallpaper: { data: { id: 20, attributes: [Object] } },
//     cover: { data: { id: 19, attributes: [Object] } },
//     screenshots: { data: [ [Object] ] },
//     platform: { data: { id: 1, attributes: [Object] } }
//   } GAMEEEEEEEEEEEEE
