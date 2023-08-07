import { useEffect, useState } from 'react'
import { Address } from '../../../../api'
import { useAuth } from '../../../../hook'
import styles from './ListAddresses.module.scss'

const addresCtrl = new Address()

export default function ListAddresses() {

  const [addresses, setAddresses] = useState(null)

  const {user} = useAuth()

  useEffect(() => {
    (async() => {
      try {
        const response = await addresCtrl.getAll(user.id)
        setAddresses(response.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  if(!addresses) return null  

  return (
    <div className={styles.addresses}>

    </div>
  )
}
