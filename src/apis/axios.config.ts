import axios from 'axios'
import { notification } from 'antd'

axios.defaults.timeout = 10000

axios.interceptors.request.use(config => {
  // config.withCredentials = true
  config.url = process.env.NODE_ENV === 'development' ? '//localhost:3001' + config.url : '//api.zongzheng.me' + config.url
  return config
})

axios.interceptors.response.use(response => {
  if (response.data.code !== 0) {
    notification.error({
      message: `请求失败: ${response.config.url}`,
      description: response.data.message
    })
  }
  return response.data
}, error => {
  notification.error({
    message: '网络错误或服务不可用',
    description: error.message
  })
  error.data = {
    code: null,
    data: null,
    message: null
  }
  return error
})

/**
 * 扩展 axios 响应对象
 */
declare module 'axios' {
  export interface AxiosResponse extends IResponse<any> {
  }
}