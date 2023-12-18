import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import CitiesProvider from '@/contexts/cities.context'
import { router } from '@/router'
import '@/globals.css'

function App() {
  return (
    <>
      <CitiesProvider>
        <RouterProvider router={router} />
        <Toaster theme="dark" duration={3000} />
      </CitiesProvider>
    </>
  )
}

export default App
