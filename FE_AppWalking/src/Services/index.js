import axios from 'axios'
import { URL_SEVER } from '../Contants'
const BASE_URL = `http://${URL_SEVER}:433/intelcons-api/v1/user/`;

const api = {
   call() {
      return axios.create({
         baseURL: BASE_URL,
         headers: {
            "Accept": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
   },
}
export default api