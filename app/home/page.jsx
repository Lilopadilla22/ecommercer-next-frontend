'use client'
import Layout from "../layout/layout";
import {HomeComponent} from '../components/Home/Banner/index'
import Separator from "../components/Shared/Separator/Separator";
import { Container } from "semantic-ui-react";

export default function Home() {
  return (
    <Layout container relative>
      <HomeComponent.BannerLastGamePublished/>

      <Container>
        <HomeComponent.Latest/>
      </Container>
      
      <Separator height={100}/>
    </Layout>
  )
}
