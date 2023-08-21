'use client'
import { Address } from '../../../../../api'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../../../hook'
import { map } from 'lodash'
import styles from './Addresses.module.scss'
import classNames from 'classnames'


const addressCtrl = new Address

export  function Addresses({setAddressSelected, addressSelected }) {

    const [addresses, setAddresses] = useState(null)
    const {user} = useAuth()

    useEffect(() => {
        (async() => {
            try {
                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)
            } catch (error) {
                console.error(error) 
            }
        })()
    }, [])
    
    return (
        <div className={styles.addresses}>
            <h2>Dirección</h2>
            {map(addresses, (address) => (
                <div 
                    key={address.id} 
                    onClick={()=> setAddressSelected(address)}
                    className={classNames(styles.address, {
                        [styles.active]: address.id === addressSelected?.id 
                    })}  
                >
                    <p>{address.attributes.name} ({address.attributes.title})</p>
                    <p>
                        {address.attributes.address}, {address.attributes.postal_code}, {" "}
                        {address.attributes.state}, {address.attributes.city}
                    </p>
                </div>
            ))}
        </div>
    )
}


  