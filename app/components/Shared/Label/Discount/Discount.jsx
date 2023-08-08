import classNames from 'classnames'
import styles from './Discount.module.scss'

export default function Discount({children, className}) {
  return (
    <span className={classNames(styles.labelDiscount, {[className]: className})}>
      {children}
    </span>
  )
}
