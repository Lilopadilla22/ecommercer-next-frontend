import styles from './StepOne.module.scss'
import { Basket } from './Basket'

export function StepOne({games}) {
  return (
    <div className={styles.StepOne}>
      <div className={styles.center}>
        <Basket games={games}/>
      </div>
      <div className={styles.right}>
        <p>Resumen</p>
      </div>
    </div>
  )
}
