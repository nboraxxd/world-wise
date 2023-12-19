import clsx from 'clsx'
import styles from './Hamburger.module.css'

export default function Hamburger({ children, isSidebarOpen, setIsSidebarOpen }) {
  function handleShowAppNav() {
    setIsSidebarOpen(true)
  }

  return (
    <button className={clsx(styles.btn, { [styles['hidden']]: isSidebarOpen })} onClick={handleShowAppNav}>
      {children}
    </button>
  )
}
