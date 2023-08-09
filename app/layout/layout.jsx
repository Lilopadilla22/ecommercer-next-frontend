'use client'

import { Container } from 'semantic-ui-react'
import classNames from 'classnames'
import styles from './layout.module.scss'
import { TopBar, Footer } from '../components/layout'

export function Layout(props) {

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
