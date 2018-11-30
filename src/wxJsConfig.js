import Vue from 'vue'
import { WechatPlugin } from 'vux'
import { jsAuth } from './api/auth'
Vue.use(WechatPlugin)

const URI = `${window.location.protocol}//${window.location.host}`
jsAuth(URI).then(data => {
  Vue.wechat.config(data.data)
})
