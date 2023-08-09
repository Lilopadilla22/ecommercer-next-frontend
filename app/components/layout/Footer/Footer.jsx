'use client'
import Link from "next/link"
import {Container, Image, Button} from 'semantic-ui-react'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.columns}>
                    <div>
                        <Link href='/'>
                            <Image src='/images/logo.png' alt='gamming' />
                        </Link>
                    </div>

                    <div>
                        <ul>
                            <Link href='#'>Términos y condiciones</Link>
                            <Link href='#'>Política de privacidad</Link>
                            <Link href='#'>Contacto</Link>
                            <Link href='#'>PQR's</Link>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <Button as='a' href='#' circular color="facebook" icon='facebook'/>
                        <Button as='a' href='#' circular color="twitter" icon='twitter'/>
                        <Button as='a' href='#' circular color="linkedin" icon='linkedin'/>
                        <Button as='a' href='#' circular color="instagram" icon='instagram'/>
                        <Button as='a' href='#' circular color="google plus" icon='google plus'/>
                        <Button as='a' href='#' circular color="youtube" icon='youtube'/>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>Copyright 2023 Gamming - All rights reserved</span>
                </div>               
            </Container>
        </div>
    )
}
