'use client'
import Layout from '../layout/layout'
import Info from '../components/Account/info/Info'
import { Tab } from 'semantic-ui-react'
import styles from './account.module.scss'
import { useAuth } from '../hook'
import { useRouter } from 'next/navigation'

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
        icon: 'setting',
        content: 'Ajustes'
      },
      render: () => (
        <Tab.Pane attached={false}>
            <p>Configuraciones</p>
        </Tab.Pane>
      )
    },
    {
      menuItem: {
        icon: 'logout',
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
