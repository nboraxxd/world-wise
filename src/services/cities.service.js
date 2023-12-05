import { http } from '@/utils/http'

const CITIES_URL = '/cities'

export const citiesService = {
  getCities(signal) {
    return http.get(CITIES_URL, { signal })
  },
}