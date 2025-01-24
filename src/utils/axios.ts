import { STATUS_CODES } from '@/constants'
import axios from 'axios'

export const axiosSetup = () => {

  // axios.defaults.baseURL = 'https://budgetwise-auth-5cba1d32d7c3.herokuapp.com/api/v1/'
  axios.defaults.withCredentials = true

  axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

      return config
    },

    (error) => {
      console.log('axios request error: ', error)

      return Promise.reject(error)
    },
  )

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const statusCode = error.response.status

      if(statusCode === STATUS_CODES.CLIENT_ERROR_FORBIDDEN || statusCode === STATUS_CODES.CLIENT_ERROR_UNAUTHORIZED) {
        localStorage.removeItem('auth_token')
        window.location.href = '/login'
      } else {
        return Promise.reject(error)
      }
    },
  )
}
