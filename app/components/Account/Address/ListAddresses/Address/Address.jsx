'use client'
import { Button, Icon } from 'semantic-ui-react'
import styles from './Address.module.scss'
import { useState } from 'react'
import BasicModal from '../../../../Shared/BasicModal/BasicModal'
import Confirm from '../../../../Shared/Confirm/Confirm'
import AddressForm from '../../AddressForm/AddressForm'
import {Address as AddressCtrl} from '../../../../../api/address'

const addressCtrl = new AddressCtrl()

export default function Address({address, addressId, onReload}) {

  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  
  const openCloseEdit = () => setShowEdit((prevState)=> !prevState)
  const openCloseConfirm = () => setShowConfirm((prevState)=> !prevState)

  const onDelete = async () => {
    try {
      await addressCtrl.delete(addressId)
      onReload()
    } catch (error) {
      console.log(error)
    }
  }

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
            <Button primary icon onClick={openCloseConfirm}>
                <Icon name='delete'/>
            </Button>
        </div>
      </div>

      <Confirm 
        open={showConfirm} 
        onCancel = {openCloseConfirm}
        onConfirm={onDelete}
        content = '¿Estás seguro de Eliminar esta Direccion?'
      />

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
