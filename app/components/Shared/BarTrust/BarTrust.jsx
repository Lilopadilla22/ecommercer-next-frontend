'use client'
import { Container, Icon } from 'semantic-ui-react'
import { map } from 'lodash'
import styles from './BarTrust.module.scss'
import { data } from './BarTrust.data'

export function BarTrust() {
  return (
    <div className={styles.BarTrust}>
      <Container className={styles.content}>
        {map(data, (item) => (
            <div className={styles.block}>
                <Icon name={item.name}/>
                <div>
                    <h5>
                        {item.title}
                    </h5>
                    <span>
                        {item.description}
                    </span>
                </div>
            </div>
        ))}
      </Container>
    </div>
  )
}
