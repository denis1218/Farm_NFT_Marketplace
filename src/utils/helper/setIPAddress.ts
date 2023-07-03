import axios from 'axios'
import { API_ENDPOINT } from 'src/static'

export const setIPAddress = async (wallet: string) => {
  if (wallet !== undefined) {
    const ipdata = await axios.get('https://geolocation-db.com/json/')
    const res = await axios.post(`${API_ENDPOINT}user/setip/${wallet}`, { ip: ipdata.data.IPv4, country: ipdata.data.country_name })
    console.log('setip', res)
  }
}
