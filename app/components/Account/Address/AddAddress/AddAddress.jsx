'use client'
import { useState } from "react"
import { Button } from "semantic-ui-react"
import styles from './AddAddress.module.scss'
import BasicModal from '../../../Shared/BasicModal/BasicModal'
import AddressForm from "../AddressForm/AddressForm"

export default function AddAddress() {

  const [show, setShow] = useState(true)
  
  const onOpenClose = () => setShow((prevState) => !prevState)
  console.log(show , onOpenClose)
  

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title='Nueva Direccion'>
        <AddressForm onClose={onOpenClose}/>
      </BasicModal>
    </>
  )
}
