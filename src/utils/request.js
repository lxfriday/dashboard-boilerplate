import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
  baseURL: __DEV__ ? '' : '',
})

request.interceptors.response.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    console.log('axios request error', error.message)
    message.error('请求失败：' + error.message)
    return Promise.reject(error)
  }
)

export async function get(url, config) {
  config = config || {}
  const res = await request({
    method: 'GET',
    ...config,
    url,
  })
  return res.data
}

export async function post(url, config) {
  config = config || {}
  const res = await request({
    method: 'POST',
    ...config,
    url,
  })
  return res.data
}
