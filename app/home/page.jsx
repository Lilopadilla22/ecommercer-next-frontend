import Layout from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'
import Separator from "../components/Shared/Separator/Separator";

export default function Home() {
  return (
    <Layout container relative>
      <HomeComponent.BannerLastGamePublished/>
      <Separator height={100}/>
    </Layout>
  )
}
