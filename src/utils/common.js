export function isWeiXin () {
  const ua = window.navigator.userAgent.toLowerCase()
  if (/MicroMessenger/i.test(ua)) {
    return true
  } else {
    return false
  }
}
