import { useNavigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { useAuth } from '@/contexts/auth.context'
import styles from './User.module.css'

export default function User() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  function handleClick() {
    logout()
    navigate(PATH.HOMEPAGE)
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}
