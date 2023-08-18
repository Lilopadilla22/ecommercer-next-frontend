import styles from './Wallpaper.module.scss'
import Image from 'next/image'

export default function Wallpaper(props) {

  const {image} = props

  return (
    <div className={styles.wallpaper}>
        <Image
          src={image}
          alt="Picture of the author"
          layout='fill'
          objectFit='contain'
        />
    </div>
  )
}


