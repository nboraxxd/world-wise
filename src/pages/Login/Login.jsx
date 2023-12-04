import { useState } from 'react'
import styles from './Login.module.css'

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('jack@example.com')
  const [password, setPassword] = useState('qwerty')

  return (
    <form className={styles.loginForm}>
      <div className={styles.loginRow}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>

      <div className={styles.loginRow}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div>
        <button>Login</button>
      </div>
    </form>
  )
}
