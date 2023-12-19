import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

import { Logo } from '@/components/Logo'
import { AppNav } from '@/components/AppNav'
import { AppFooter } from '@/components/AppFooter'
import styles from './AppSidebar.module.css'

export default function AppSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <aside className={clsx({ [styles['sidebarOpen']]: isSidebarOpen })}>
      <div className={styles.sidebar}>
        <Logo className={styles.logo} />
        <AppNav />
        <Outlet />
        <AppFooter />
        <button className={styles.sidebarClose} onClick={() => setIsSidebarOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  )
}
