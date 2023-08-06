'use client'
import {Image, Icon, Input} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Platform } from '@/app/api'
import { map } from 'lodash'
import styles from './Menu.module.scss'
import Link from 'next/link'


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
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src={platform.attributes.icon.data.attributes.url}/>
                    {platform.attributes.title}
                </Link>
            ))}
        </div>
    )
}
