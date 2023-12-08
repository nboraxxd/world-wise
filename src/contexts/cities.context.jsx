import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'
import { createContext, useContext } from 'react'

const CitiesContext = createContext()

export default function CitiesProvider({ children }) {
  const { data: cities, status, error } = useFetch(citiesService.getCities)

  return <CitiesContext.Provider value={{ cities, status, error }}>{children}</CitiesContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCities() {
  const context = useContext(CitiesContext)

  if (context === undefined) {
    throw new Error('useCities must be used within a CitiesProvider')
  }

  return context
}
