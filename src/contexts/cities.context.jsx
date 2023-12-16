import { createContext, useContext, useState } from 'react'

import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'

const CitiesContext = createContext()

export default function CitiesProvider({ children }) {
  const [currentCity, setCurrentCity] = useState({})

  const { data: cities, status, error } = useFetch(citiesService.getCities)

  return (
    <CitiesContext.Provider value={{ cities, status, error, currentCity, setCurrentCity }}>
      {children}
    </CitiesContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCities() {
  const context = useContext(CitiesContext)

  if (context === undefined) {
    throw new Error('useCities must be used within a CitiesProvider')
  }

  return context
}
