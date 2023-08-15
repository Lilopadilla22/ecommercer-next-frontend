'use client'
import {Image, Icon, Input} from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Platform } from '../../../api/platform'
import { map } from 'lodash'
import styles from './Menu.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { ENV } from '../../../utils'
import { useRouter } from 'next/navigation'

const platformCtrl = new Platform

export default function Menu({isOpenSearch}) {

    const [platforms, setPlatforms] = useState(null)
    const [showSearch, setShowSearch] = useState(isOpenSearch)
    const [searchText, setSearchText] = useState("")
    const router = useRouter()
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

    useEffect(() => {
        setSearchText(router.replace || '')
    }, [])
    
    const onSearch = (text) => {
        setSearchText(text)
        router.replace(`/search?s=${text}`)
    }   

    return (
        <div className={styles.platforms}>
            {map(platforms, (platform) => (
                <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                    <Image src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}/>
                    {platform.attributes.title}
                </Link>
            ))}

            <button className={styles.search} onClick={openCloseSearch}>
                <Icon name='search'/>
            </button>

            <div className={classNames(styles.inputContainer, {[styles.active]: showSearch })}>
                <Input 
                    id='search-games' 
                    placeholder='Busca tu juego' 
                    className={styles.input} 
                    focus={true}
                    value={searchText}
                    onChange={(_, data)=> onSearch(data.value)}
                />
                <Icon name='close' className={styles.closeInput} onClick={openCloseSearch} />
            </div>
        </div>
    )
}
