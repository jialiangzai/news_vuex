import axios from 'axios'
const MyAxios = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/'
})
export default MyAxios
