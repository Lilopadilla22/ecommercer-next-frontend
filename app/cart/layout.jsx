'use client'

import { Container } from 'semantic-ui-react'
import { Separator } from '../components/Shared'
import { Footer, HeaderCart } from '../components/layout'

export default function layout({children}) {
  return (
   <>
    <HeaderCart/>
    <p>Header Cart</p>
    <Separator height={30}/>
    <Container>{children}</Container>
    <Separator height={30}/>
    <Footer/>
   </>
  )
}
