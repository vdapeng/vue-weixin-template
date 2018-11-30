
export function valueByKey (name) {
  let reg = `(^|&)${name}=([^&]*)(&|$)`
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  } else {
    return false
  }
}

export function URI () {
  let uri = ''
  if (window.location.href.indexOf('FriendsCertification?') > 0) {
    uri = encodeURIComponent(window.location.href)
  } else {
    uri = encodeURIComponent(window.location.href.split('?')[0])
  }
  return uri
}
