import router from './router'
import store from './store'
import { valueByKey } from './utils/hrefUtil'
import { isWeiXin } from './utils/common'
import { weixinAuthUrl } from './utils/auth'

const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log(to.path)
  const userId = store.getters.userid
  console.log(userId)
  if (!userId || userId == null || userId === undefined || userId === '' || userId === 'undefined') {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      if (isWeiXin()) {
        const code = valueByKey('code')
        const state = valueByKey('state')
        if (!code || !state) {
          window.location.href = weixinAuthUrl(to)
        } else {
          store.dispatch('Auth', code).then(() => {
            next(state)
          }).catch(() => {
            next(`/error`)
          })
        }
      } else {
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    next()
  }
})
