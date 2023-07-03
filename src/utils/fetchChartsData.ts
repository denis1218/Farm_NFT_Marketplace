import axios from 'axios'
import { API_ENDPOINT } from 'src/static'
import { setGlobalState } from 'src/state/state'

export const fetchChartsData = async (chartType: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}charts/${chartType}`)
    console.log('fetchChartsData', res)
    setGlobalState('chartsData', res.data.data)
  } catch (error: any) {
    console.log(error)
  }
}
