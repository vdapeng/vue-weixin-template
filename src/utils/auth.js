import Cookies from 'js-cookie'
import {URI} from './hrefUtil'

const IsAuthKey = 'isAuth'

export function isAuth () {
  return Cookies.get(IsAuthKey) || false
}

export function setAuth (isAuth) {
  return Cookies.set(IsAuthKey, isAuth)
}

export function removeAuth () {
  return Cookies.remove(IsAuthKey)
}

const USERID = 'USERID'

export function getUserId () {
  return Cookies.get(USERID) || undefined
}

export function setUserId (userId) {
  return Cookies.set(USERID, userId)
}

export function removeUserId () {
  return Cookies.remove(USERID)
}

export function weixinAuthUrl (to) {
  return 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + process.env.APPID + '&redirect_uri=' + URI() + '&response_type=code&scope=snsapi_userinfo&state=' + to.path + '#wechat_redirect'
}
