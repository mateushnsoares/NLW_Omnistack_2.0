import axios from 'axios'
const api = axios.create({
  baseURL: 'http://192.168.88.10:3333',
})
export default api
