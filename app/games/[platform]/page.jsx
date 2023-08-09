
import { Platform, Game } from '../../api'
import GridGames from '../../components/Shared/GridGames/GridGames';
import Layout from '../../layout/layout';
import Separator from '../../components/Shared/Separator/Separator';


export default async function PlatformPage(props) {

    const { params: { platform }, searchParams: { page = 1 } } = props;
    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform);
    const gameCtrl = new Game();
    const responseGames = await gameCtrl.getGamesByPlatformSlug(platform, page);

  return (
    <Layout relative>
      <div style={{paddingLeft: 50, paddingRight: 50}}>
        <Separator height={50}/>
          <h2>{responsePlatform.attributes.title}</h2>
          {
            responseGames.data ? (
              <>
                <GridGames games={responseGames.data}/>
              </>
            ) : (
              <p>
                No resultant
              </p>
            )
          }
          <Separator height={100}/>
      </div>
    </Layout>
  )
}


// {
//   id: 2,
//   attributes: {
//     title: 'Xbox',
//     slug: 'xbox',
//     order: 2,
//     createdAt: '2023-08-02T19:20:56.192Z',
//     updatedAt: '2023-08-02T19:20:57.270Z',
//     publishedAt: '2023-08-02T19:20:57.267Z'
//   }
// } PLATFORM
// {
//   data: [ { id: 3, attributes: [Object] } ],
//   meta: { pagination: { page: 1, pageSize: 30, pageCount: 1, total: 1 } }
// } GAMES responseGames.meta.pagination