import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { toast } from 'sonner'

import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'

const CitiesContext = createContext()

const initialState = {
  cities: [],
  status: 'idle',
  currentCity: {},
}

function reducer(state, action) {
  switch (action.type) {
    case 'cities/pending':
      return { ...state, status: 'pending' }

    case 'cities/fetched':
      return { ...state, cities: action.payload }

    case 'city/created':
      return { ...state, cities: [...state.cities, action.payload], currentCity: action.payload, status: 'successful' }

    case 'city/current':
      return { ...state, currentCity: action.payload }

    case 'city/deleted':
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
        status: 'successful',
      }

    case 'cities/rejected':
      return { ...state, status: 'rejected' }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default function CitiesProvider({ children }) {
  const [{ cities, status, currentCity }, dispatch] = useReducer(reducer, initialState)

  const { data: _cities, status: fetchStatus, error: fetchError } = useFetch(citiesService.getCities)

  useEffect(() => {
    if (_cities) {
      dispatch({ type: 'cities/fetched', payload: _cities })
    }
  }, [_cities])

  async function createCity(newCity) {
    try {
      dispatch({ type: 'cities/pending' })

      const res = await citiesService.createCity(newCity)

      dispatch({ type: 'city/created', payload: res })
    } catch (err) {
      toast.error(err.message || 'Something went wrong')
      dispatch({ type: 'cities/rejected', payload: err })
      throw err
    }
  }

  async function deleteCity(cityId) {
    if (!cityId) return

    try {
      dispatch({ type: 'cities/pending' })

      await citiesService.deleteCity(cityId)

      dispatch({ type: 'city/deleted', payload: cityId })
    } catch (err) {
      toast.error(err.message || 'Something went wrong')
      dispatch({ type: 'cities/rejected', payload: err })
      throw err
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        fetchStatus,
        fetchError,
        currentCity,
        setCurrentCity: useMemo(() => (city) => dispatch({ type: 'city/current', payload: city }), []),
        createCity,
        deleteCity,
        cityStatus: status,
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
