'use client'
import Layout from '../layout/layout'
import Info from '../components/Account/info/Info'
import { Tab } from 'semantic-ui-react'
import styles from './account.module.scss'
import { useAuth } from '../hook'
import { useRouter } from 'next/navigation'
import { Settings } from '../components/Account'
import Separator from '../components/Shared/Separator/Separator'

export default function Account() {

  const {logout, user} = useAuth()

  const router = useRouter()

  if(!user) {
    router.push("/join/sign-in")
    return null
  } 

  const panes = [
    {
      menuItem: 'Mis pedidos',
      render: () => (
        <Tab.Pane attached={false}>
            <p>Mis pedidos</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Lista de deseos',
      render: () => (
        <Tab.Pane attached={false}>
            <p>Mi ista de deseos</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Direcciones',
      render: () => (
        <Tab.Pane attached={false}>
            <p>Mis direcciones</p>
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
