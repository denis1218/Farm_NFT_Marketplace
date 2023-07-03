import axios from 'axios'
import { API_ENDPOINT } from 'src/static'

export const getIncome = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}sales/income`)
    console.log('Income', res)
    return res.data.data
  } catch (error: any) {
    console.log(error)
  }
}
