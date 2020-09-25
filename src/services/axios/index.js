import axios from 'axios'
import store from 'store'
import { notification } from 'antd'

const apiClient = axios.create({
  baseURL: 'http://188.82.118.155:1337',
  // baseURL: '/api',
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
})

apiClient.interceptors.request.use(request => {
  const accessToken = store.get('accessToken')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    // request.headers.AccessToken = accessToken
  }
  return request
})

apiClient.interceptors.response.use(undefined, errorResponse => {
  // Errors handling
  const { response } = errorResponse
  const { data } = response
  if (data) {
    const { error, message } = data

    if (error || message) {
      notification.warning({
        message: error != null ? error : data,
      })
    }
  }
})

export default apiClient
