import Layout from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'

export default function Home() {
  return (
    <Layout container relative>
      <p style={{paddingTop: 100}}>ESTAMOS EN HOME</p>

      <HomeComponent.BannerLastGamePublished/>

    </Layout>
  )
}
