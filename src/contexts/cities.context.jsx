import { createContext, useContext, useEffect, useState } from 'react'

import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'

const CitiesContext = createContext()

export default function CitiesProvider({ children }) {
  const [currentCity, setCurrentCity] = useState({})
  const [cities, setCities] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const { data: _cities, status: fetchStatus, error: fetchError } = useFetch(citiesService.getCities)

  useEffect(() => {
    if (_cities) {
      setCities(_cities)
    }
  }, [_cities])

  async function createCity(newCity) {
    try {
      setStatus('pending')

      const res = await citiesService.createCity(newCity)

      setCities((prevCities) => [...prevCities, res])
      setStatus('successful')
    } catch (err) {
      setStatus('rejected')
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Something went wrong')
      }
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        fetchStatus,
        fetchError,
        currentCity,
        setCurrentCity,
        createCity,
        createCityStatus: status,
        createCityError: error,
      }}
    >
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
