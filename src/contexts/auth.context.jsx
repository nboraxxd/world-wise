import { createContext, useContext, useReducer } from 'react'
import { toast } from 'sonner'

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

const AuthContext = createContext()

const initialState = {
  user: null,
  isAuthenticated: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'auth/login':
      return { ...state, user: action.payload, isAuthenticated: true }

    case 'auth/logout':
      return { ...state, user: null, isAuthenticated: false }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)

  function login(email, password) {
    if (email !== FAKE_USER.email || password !== FAKE_USER.password) {
      toast.error('Invalid credentials')
    }

    dispatch({ type: 'auth/login', payload: FAKE_USER })
  }

  function logout() {
    dispatch({ type: 'auth/logout' })
  }

  return <AuthContext.Provider value={{ login, logout, user, isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
