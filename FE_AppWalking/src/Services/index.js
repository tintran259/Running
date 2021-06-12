import axios from 'axios';
import {URL_SEVER} from '../Contants';
const BASE_URL = `http://${URL_SEVER}:4000`;

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
    });
  },
  callAuth(token) {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        authorization: token,
      },
    });
  },
};
export default api;
