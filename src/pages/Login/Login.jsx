import { useState } from 'react'

import { useAuth } from '@/contexts/auth.context'
import { Button } from '@/components/Button'
import styles from './Login.module.css'

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com')
  const [password, setPassword] = useState('qwerty')
  const { login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    if (email && password) login(email, password)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>

      <div className={styles.row}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <Button type="primary">Login</Button>
    </form>
  )
}
