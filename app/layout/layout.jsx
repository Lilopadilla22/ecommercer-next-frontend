'use client'

import { Container } from 'semantic-ui-react'
import classNames from 'classnames'
import styles from './layout.module.scss'
import TopBar from '../components/layout/TopBar/TopBar'
import Footer from '../components/layout/Footer/Footer'

export default function Layout(props) {

    const {children, isOpenSearch = false, isContainer= false, relative} = props

    return (
        <>
           <TopBar isOpenSearch={isOpenSearch}/>

            <Container fluid> 
                <div className={classNames({[styles.relative]: relative})}>
                    {
                        isContainer ? <Container> {children} </Container> : children
                    }
                </div>
            </Container>

            <Footer/>
        </>
    ) 
}
