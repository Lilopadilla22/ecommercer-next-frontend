import Layout from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'

export default function Home() {
  return (
    <Layout container relative>
      <HomeComponent.BannerLastGamePublished/>
    </Layout>
  )
}
