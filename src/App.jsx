import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import CitiesProvider from '@/contexts/cities.context'
import AuthProvider from '@/contexts/auth.context'
import { router } from '@/router'
import '@/globals.css'

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <RouterProvider router={router} />
        <Toaster theme="dark" duration={3000} />
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
