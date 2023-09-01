'use client'
import { Layout } from '../layout/layout'
import { Tab } from 'semantic-ui-react'
import styles from './account.module.scss'
import { useAuth } from '../hook'
import { useRouter } from 'next/navigation'
import { Settings, Address, Info, Wishlist, Orders } from '../components/Account'
import { Separator } from '../components/Shared'
import { useState } from 'react'

export default function Account() {

  const [reload, setReload] = useState(false)

  const {logout, user} = useAuth()

  const router = useRouter()

  if(!user) {
    router.push("/join/sign-in")
    return null
  } 

  const onReload = () => setReload((prevState) => !prevState)

  const panes = [
    {
      menuItem: 'Mis pedidos',
      render: () => (
        <Tab.Pane attached={false}>
            <Orders/> 
            <Separator height={80}/>  
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
            <Wishlist/>
            <Separator height={50}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Direcciones',
      render: () => (
        <Tab.Pane attached={false}>
            <Address.AddAddress onReload={onReload}/>
            <Address.ListAddresses reload={reload} onReload={onReload} />
            <Separator height={80}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        key: 20,
        icon: 'setting',
        content: 'Ajustes'
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm/>
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm/>
            <Settings.ChangePassaword/>
          </div>
          <Separator height={80}/>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        key: 21,
        icon: 'log out',
        content: "",
        onClick: logout
      }
    }
  ]

  return (
    <>
        <Layout isContainer relative>
            <Info/>
            <Tab 
              menu={{secondary: true, pointing: true }} 
              panes={panes} 
              className={styles.Tabs} /> 
        </Layout>
    </>
  )
}
