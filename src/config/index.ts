/**
 *
 * 测试环境小程序 appId: wx6ef5f933fdee220d
 * 生产环境小程序 appId: wx5840ba382bc72888
 *
 * 'develop', //开发版
 * 'trial', //体验版
 * 'release', //正式版
 */
// declare const __wxConfig: { envVersion: string }

// @ts-ignore
const { envVersion } = __wxConfig || {}

export const isDev = process.env.NODE_ENV === 'development'

// api路径
// const testurl = 'https://test.dxdd.wushiai.com/'
// const testurl = 'http://121.36.201.33:9009/'
const devApi = 'http://121.36.201.33:9023'
// const devApi = 'http://192.168.30.2:9017/'
const prodApi = 'https://msmt.nsoas.org.cn/'

// 正式路径
// const prodRes = 'http://218.85.66.50:59005/'
// const prodRes = 'https://test.odxdd.wushiai.com/'
const prodRes = 'https://omsmt.nsoas.org.cn/'
// web路径
export const webViewUrl = 'https://test.dxdd.wushiai.com/web_3d/'

/**
 * 静态资源
 */
export const resourceUrl = {
  develop: prodRes,
  trial: prodRes,
  release: prodRes,
  undefined: prodRes
}[envVersion]

/**
 * api
 */
export const apiUrl = {
  develop: devApi,
  trial: prodApi,
  release: prodApi,
  undefined: prodApi
}[envVersion]
