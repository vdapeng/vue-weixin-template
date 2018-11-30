import request from '@/utils/request'

export function auth (code) {
  return request({
    url: '/wxcp/auth/userInfo',
    method: 'get',
    params: { code }
  })
}

export function jsAuth (url) {
  return request({
    url: '/wxcp/jsapi/jsapiSignature',
    method: 'get',
    params: { url }
  })
}
