import axios from 'axios'

export const axiosSetup = () => {
  const token = localStorage.getItem('auth_token')
  const bearerToken = `Bearer ${token}`

  // axios.defaults.baseURL = 'https://budgetwise-auth-5cba1d32d7c3.herokuapp.com/api/v1/'
  axios.defaults.withCredentials = true

  axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = bearerToken
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
      console.error('axios response statusCode: ', statusCode)

      //   if (
      //     statusCode === StatusCodes.CLIENT_ERROR_UNAUTHORIZED ||
      //     statusCode === StatusCodes.CLIENT_ERROR_FORBIDDEN ||
      //     !token
      //   ) {
      //     navigate(`/${StatusCodes.CLIENT_ERROR_FORBIDDEN}`)
      //   }

      return Promise.reject(error)
    },
  )
}
