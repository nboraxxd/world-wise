import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

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
      toast.error(err.message || 'Something went wrong')
      setError(err.message || 'Something went wrong')

      throw err
    }
  }

  async function deleteCity(cityId) {
    if (!cityId) return

    try {
      setStatus('pending')

      await citiesService.deleteCity(cityId)
      setCities((prevCities) => prevCities.filter((city) => city.id !== cityId))

      setStatus('successful')
    } catch (err) {
      setStatus('rejected')
      toast.error(err.message || 'Something went wrong')
      throw err
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        fetchStatus,
        fetchError,
        currentCity,
        setCurrentCity,
        createCity,
        deleteCity,
        cityStatus: status,
        cityError: error,
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
