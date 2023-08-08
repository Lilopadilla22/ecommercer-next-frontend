'use client'


import { Platform } from '../../api/platform'
import { Game } from '../../api/games'
import { size } from 'lodash'

export default function PlatformPage(props) {

    console.log(props)

  return (
    <div>
        <h2>SOY LOS JUEGOS EN PLATAFORMA</h2>
    </div>
  )
}



export async function getServerSideProps(context) {

    const { params: { platform }, searchParams: { page = 1 } } = context;

    console.log(page, 'hey')

    console.log(context, 'CONTEXTO')
  
    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform);

    console.log('responseP:', responsePlatform)
  
    const gameCtrl = new Game();
    const responseGames = await gameCtrl.getGamesByPlatformSlug(platform, searchParams);
  
    return {
      props: {
        platform: responsePlatform,
        games: responseGames.data,
        pagination: responseGames.meta.pagination,
      }
    };
}

