import axios from 'taro-axios'
// import Taro, { getStorageSync } from '@tarojs/taro'
// import { apiUrl } from '@/config/config'
// import { storageKeys } from '@/config/consts'
// import { ILocalToken } from '@/config/interfaces'
// import { hasVal, axiosErrorHandle, treatHttpError, checkTokenExpires } from '@/utils'

const Requester = axios.create({
  // baseURL: apiUrl
  // timeout: timeoutTick
})

/**
 * 不加token的url
 * @note 有部分接口加了 token 会有问题, 临时的解决方法
 */
// const tokenExcludes = ['bus/api/v1/enum/']

Requester.interceptors.request.use(config => {
  // checkTokenExpires()
  // 添加 token
  // const token: ILocalToken = getStorageSync(storageKeys.TOKEN)
  // const cookie: Record<string, string> = getStorageSync(storageKeys.COOKIE) || {}
  // const cookieStr = Object.keys(cookie).reduce((p, k) => `${p}${k}=${cookie[k]};`, '')
  // if (hasVal(token) && tokenExcludes.every(tev => !config.url?.includes(tev))) {
  //   config.headers.Authorization = token.token
  // }

  // hasVal(cookie) && (config.headers.Cookie = cookieStr)
  return config
})

Requester.interceptors.response.use(
  response => {
    // const { headers, data, config } = response
    // // cookie处理, 存放于Store
    // if (headers['Set-Cookie']) {
    //   const [name, val] = headers['Set-Cookie'].split(';')[0].split('=')
    //   const cookie = getStorageSync(storageKeys.COOKIE) || {}
    //   Taro.setStorageSync(storageKeys.COOKIE, { ...cookie, [name]: val })
    // }

    // // 错误处理
    // if (hasVal(data?.error)) {
    //   // 是否静默(500错误)
    //   // @ts-ignore
    //   const slient = config.meta?.slient || false
    //   treatHttpError(response.status, data?.error, slient)
    // }

    // 响应拦截器处理
    return response
  },
  // 进入 error 有三种可能
  //  1. http 状态码 4xx 5xx
  //  2. axios 自身错误, 超时 / 没网络 / 被取消
  (err: any) => {
    // const { code = true, message = '网络异常', response, config } = err
    // // axios 错误
    // if (!hasVal(response)) return axiosErrorHandle(code, message)
    // // 是否静默(500错误)
    // // @ts-ignore
    // const slient = config.meta?.slient || false
    // // http 错误
    // const { data, status } = response || {
    //   data: null,
    //   status: null
    // }
    // treatHttpError(status, data.error, slient)
  }
)

export default Requester
