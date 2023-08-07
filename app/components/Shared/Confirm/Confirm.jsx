'use client'
import { Confirm as ConfirmSU } from 'semantic-ui-react'

export default function Confirm({...rest}) {

  return <ConfirmSU classname='confirm' size='mini' {...rest}/>

}
