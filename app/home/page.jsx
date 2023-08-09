'use client'
import { Layout } from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'
import {Separator, BarTrust, BannerAd} from "../components/Shared";
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

      <BannerAd 
        title="Registrate y obten los mejores precios!"  
        subtitle= '¡Compara con otros juegos y elige el tuyo'
        btnTitle='Entra Ahora'
        btnLink= '/account'
        image= '/images/img01.png'
      />

      <Separator height={50}/>

      <Container>
        <HomeComponent.Latest title='Nintendo' limit={3} platformId={platFormId.nintendo}/>
      </Container>

      <Separator height={100}/>

    </Layout>
  )
}
