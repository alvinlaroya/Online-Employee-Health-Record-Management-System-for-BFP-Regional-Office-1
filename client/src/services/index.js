import axios from 'axios'

export default axios.create({
  /* baseUrl: 'http://127.0.0.1:8000/api', */
  baseUrl: 'http://192.168.1.143:8000/api',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
