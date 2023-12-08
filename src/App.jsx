import { RouterProvider } from 'react-router-dom'

import CitiesProvider from '@/contexts/cities.context'
import { router } from '@/router'
import '@/globals.css'

function App() {
  return (
    <>
      <CitiesProvider>
        <RouterProvider router={router} />
      </CitiesProvider>
    </>
  )
}

export default App
