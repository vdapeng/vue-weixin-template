import request from '@/utils/request'

export function auth (code) {
  return request({
    url: '/wxcp/wxcp/auth/userInfo',
    method: 'get',
    params: { code }
  })
}

export function jsAuth (url) {
  return request({
    url: '/wxcp/wxcp/jsapi/jsapiSignature',
    method: 'get',
    params: { url }
  })
}

export function login (data) {
  return request({
    url: '/u/qywxUserInfo/login',
    method: 'post',
    data: data
  })
}
