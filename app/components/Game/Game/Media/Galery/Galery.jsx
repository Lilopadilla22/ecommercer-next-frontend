'use client'
import { Image } from 'semantic-ui-react'
import styles from './Galery.module.scss'
import { map } from 'lodash'
import { ENV } from '../../../../../utils'

export function Galery({screenshots}) {

    const screenShotsClone = [...screenshots]
    const principalImage = screenShotsClone.shift()
    const onOpenClose = () => {
        console.log('abrir galeria')
    }

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.principal}>
                    <Image src={`${ENV.SERVER_HOST}${principalImage.attributes.url}`} onClick={onOpenClose}/>
                </div>
                <div className={styles.grid}>
                    {map(screenShotsClone, (screenshot) =>(
                        <div key={screenshot.id}>
                            <Image src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`} onClick={onOpenClose} />
                        </div>
                    ))}
                </div>
            </div>      
        </>
    )
}

// [
//     {
//       id: 21,
//       attributes: {
//         name: 'forspoken-wallpaper.jpg',
//         alternativeText: null,
//         caption: null,
//         width: 1920,
//         height: 620,
//         formats: [Object],
//         hash: 'forspoken_wallpaper_d57a8cf65b',
//         ext: '.jpg',
//         mime: 'image/jpeg',
//         size: 169.31,
//         url: '/uploads/forspoken_wallpaper_d57a8cf65b.jpg',
//         previewUrl: null,
//         provider: 'local',
//         provider_metadata: null,
//         createdAt: '2023-08-02T21:30:26.788Z',
//         updatedAt: '2023-08-02T21:30:26.788Z'
//       }
//     }
//   ] screenshot