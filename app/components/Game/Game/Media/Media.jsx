'use client'
import { Container } from 'semantic-ui-react'
import { Separator } from '../../../Shared'
import { Video } from './Video/Video'

export default function Media({video, screen}) {

    console.log(video , 'video')
    console.log(screen, 'screenshot')


  return (
    <Container>
        <h2>Visual</h2>
        <Separator height={30}/>
        <Video video= {video}/>
    </Container>
  )
}
