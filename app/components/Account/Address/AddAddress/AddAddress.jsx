'use client'
import { useState } from "react"
import { Button } from "semantic-ui-react"
import styles from './AddAddress.module.scss'

export default function AddAddress() {

  const [show, setShow] = useState(false)
  
  const onOpenClose = () => setShow((prevState) => !prevState)
  

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>
    </>
  )
}
