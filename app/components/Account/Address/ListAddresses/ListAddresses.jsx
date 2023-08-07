import { useEffect, useState } from 'react'
import { Address as AddressCtrl } from '../../../../api'
import { useAuth } from '../../../../hook'
import { map } from 'lodash'
import Address  from '../ListAddresses/Address/Address'
import styles from './ListAddresses.module.scss'

const addresCtrl = new AddressCtrl()

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
      {
        map(addresses, (address) => (
          <Address 
            key={address.id} 
            addressId={address.id} 
            address={address.attributes}
          />
        ))
      }

      
    </div>
  )
}
