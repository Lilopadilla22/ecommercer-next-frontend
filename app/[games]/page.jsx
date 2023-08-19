import { Layout } from '../layout/layout'
import { Game } from '../api'
import { Games } from '../components/Game/Game'
import { ENV } from '../utils';
import { Separator } from '../components/Shared';

export default async function gamePage(props) {
  
    const { params: {games} } = props;

    const gameCtrl = new Game();
    const responseGames = await gameCtrl.getGameByslug(games);
    const wallpaper = responseGames.attributes.wallpaper.data.attributes.url
    const HeaderWallpaper= `${ENV.SERVER_HOST}${wallpaper}`
    const gameId = responseGames.id
    const gameAtribbutes= responseGames.attributes
    const screenShots = responseGames.attributes.screenshots.data
  return (
    <>
    <Layout>
        <div>
          <Games.Wallpaper image={HeaderWallpaper} />
          <Games.Panel gameId={gameId} game={gameAtribbutes} />
          <Separator height={50}/> 
          <Games.Info game={gameAtribbutes} />
          <Separator height={30}/> 
          <Games.Media video={gameAtribbutes.video} screen={screenShots} />
          <Separator height={50}/> 
        </div>
    </Layout>
    </>
  )
}


// {
//     id: 8,
//     attributes: {
//       title: 'Sonic Frontiers',
//       price: 90,
//       discount: 19,
//       slug: 'sonic-frontiers',
//       summary: 'Sonic Frontiers​ es un videojuego de plataformas de 2022 desarrollado por Sonic Team y publicado por Sega. Como Sonic, el jugador explora las islas Starfall para recolectar las Chaos Emeralds, después de que Sonic y sus amigos se separan al caer a través de un agujero de gusano.',
//       video: 'https://www.youtube.com/watch?v=a09DmiWjmjc',
//       releaseDate: '2022-05-31',
//       createdAt: '2023-08-02T21:38:32.018Z',
//       updatedAt: '2023-08-02T21:38:34.236Z',
//       publishedAt: '2023-08-02T21:38:34.231Z'
//     }
//   }


// {
//     id: 8,
//     attributes: {
//       title: 'Sonic Frontiers',
//       price: 90,
//       discount: 19,
//       slug: 'sonic-frontiers',
//       summary: 'Sonic Frontiers​ es un videojuego de plataformas de 2022 desarrollado por Sonic Team y publicado por Sega. Como Sonic, el jugador explora las islas Starfall para recolectar las Chaos Emeralds, después de que Sonic y sus amigos se separan al caer a través de un agujero de gusano.',
//       video: 'https://www.youtube.com/watch?v=a09DmiWjmjc',
//       releaseDate: '2022-05-31',
//       createdAt: '2023-08-02T21:38:32.018Z',
//       updatedAt: '2023-08-02T21:38:34.236Z',
//       publishedAt: '2023-08-02T21:38:34.231Z',
//       platform: { data: [Object] },
//       cover: { data: [Object] },
//       wallpaper: { data: [Object] },
//       screenshots: { data: [Array] }
//     }
//   }


// {
//     data: {
//       id: 4,
//       attributes: {
//         name: 'icon-swt.svg',
//         alternativeText: null,
//         caption: null,
//         width: 26,
//         height: 26,
//         formats: null,
//         hash: 'icon_swt_8da1d12d03',
//         ext: '.svg',
//         mime: 'image/svg+xml',
//         size: 1.16,
//         url: '/uploads/icon_swt_8da1d12d03.svg',
//         previewUrl: null,
//         provider: 'local',
//         provider_metadata: null,
//         createdAt: '2023-08-02T19:21:41.914Z',
//         updatedAt: '2023-08-02T19:21:41.914Z'
//       }
//     }
//   }
