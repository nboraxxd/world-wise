import { http } from '@/utils/http'

const CITIES_URL = '/cities'
const CITY_DATA_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

export const citiesService = {
  getCities(signal) {
    return http.get(CITIES_URL, { signal })
  },

  getCity(signal, id) {
    return http.get(`${CITIES_URL}/${id}`, { signal })
  },

  getCityData(signal, lat, lng) {
    return http.get(CITY_DATA_URL, { params: { latitude: lat, longitude: lng }, signal })
  },
}
