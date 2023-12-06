import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={clsx(styles.btn, { [styles[type]]: type })}>
      {children}
    </button>
  )
}
