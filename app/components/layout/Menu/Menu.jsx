'use client'
import {Image, Icon, Input} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Platform } from '@/app/api'
import { map } from 'lodash'
import styles from './Menu.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

const platformCtrl = new Platform

export default function Menu({isOpenSearch}) {

    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch] = useState(false)

    const openCloseSearch = () => setShowSearch((prevState) => !prevState)

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

            <button className={styles.search} onClick={openCloseSearch}>
                <Icon name='search'/>
            </button>

            <div className={classNames(styles.inputContainer, {[styles.active]: showSearch })}>
                <input id='search-game' placeholder='Busca tu juego' className={styles.input} focus={true} />
                <Icon name='close' className={styles.closeInput} onClick={openCloseSearch} />
            </div>
        </div>
    )
}
