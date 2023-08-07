'use client'
import { Button, Icon } from 'semantic-ui-react'
import styles from './Address.module.scss'
import { useState } from 'react'
import BasicModal from '../../../../Shared/BasicModal/BasicModal'
import AddressForm from '../../AddressForm/AddressForm'

export default function Address({address, addressId, onReload}) {

  const [showEdit, setShowEdit] = useState(false)
  
  const openCloseEdit = () => setShowEdit((prevState)=> !prevState)

  return (
    <>
      <div className={styles.address}>
        <div >
            <p className={styles.title}>
                {address.title}:
            </p>
            <p className={styles.addressInfo}>
                {address.name}, {address.address}, {address.state}, {address.city}, {address.postal_code} 
            </p>
        </div>

        <div className={styles.actions}>
            <Button primary icon onClick={openCloseEdit}>
                <Icon name='pencil'/>
            </Button>
            <Button primary icon>
                <Icon name='delete'/>
            </Button>
        </div>
      </div>

      <BasicModal show={showEdit} onClose={openCloseEdit} title='Editar Dirección'>
        <AddressForm 
          onClose={openCloseEdit} 
          onReload={onReload} 
          addressId={addressId} 
          address={address}
        />
      </BasicModal>
    </>
  )
}
