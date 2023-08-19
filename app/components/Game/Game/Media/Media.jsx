'use client'
import { Container } from 'semantic-ui-react'
import { Separator } from '../../../Shared'
import { Video } from './Video'
import { Galery } from './Galery'

export default function Media({video, screen}) {

  return (
    <Container>
        <h2>Visual</h2>
        <Separator height={30}/>
        <Video video= {video}/>
        <Separator height={30}/>
        <Galery screenshots={screen}/>
    </Container>
  )
}
