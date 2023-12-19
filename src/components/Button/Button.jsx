import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({ children, onClick, type, className }) {
  return (
    <button onClick={onClick} className={clsx(styles.btn, { [styles[type]]: type, [className]: className })}>
      {children}
    </button>
  )
}
