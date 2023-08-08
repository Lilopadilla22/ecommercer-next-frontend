'use client'
import Layout from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'
import Separator from "../components/Shared/Separator/Separator";
import {BarTrust} from '../components/Shared/BarTrust/BarTrust'
import { Container } from "semantic-ui-react";

const platFormId = {
  playStation: 1,
  xbox: 2,
  nintendo: 3,
  pc: 4
} 

export default function Home() {
  return (
    <Layout container relative>
      <HomeComponent.BannerLastGamePublished/>
      <Separator height={100}/>

      <Container>
        <HomeComponent.Latest title='Ultimos Lanzamiento'/>
      </Container>

      <Separator height={100}/>
        <BarTrust/>
      <Separator height={100}/>

      <Container>
        <HomeComponent.Latest title='PlayStation' limit={3} platformId={platFormId.playStation}/>
      </Container>
      
      <Separator height={100}/>

    </Layout>
  )
}
