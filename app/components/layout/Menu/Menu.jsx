'use client'
import {Image, Icon, Input} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Platform } from '@/app/api'
import styles from './Menu.module.scss'


const platformCtrl = new Platform

export default function Menu({isOpenSearch}) {

    const [platforms, setPlatforms] = useState(null)
    console.log(platforms)

    useEffect(() => {
        (async () =>{
            try {
                const response = await platformCtrl.getAll()
                setPlatforms(response.data);
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])
    


    return (
        <div>
            HOLA SOY EN MENU
        </div>
    )
}
