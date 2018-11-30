import router from './router'
import store from './store'
import { valueByKey } from './utils/hrefUtil'
import { isWeiXin } from './utils/common'
import { weixinAuthUrl } from './utils/auth'

const whiteList = ['/login']// no redirect whitelist

router.beforeEach((to, from, next) => {
  const userId = store.getters.userid
  if (!userId || userId == null || userId === undefined || userId === '' || userId === 'undefined') {
    if (isWeiXin()) {
      const code = valueByKey('code')
      const state = valueByKey('state')
      if (!code || !state) {
        window.location.href = weixinAuthUrl(to)
      } else {
        store.dispatch('AUTH', code).then(() => {
          next(state)
        }).catch(() => {
          next(state)
        })
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
      } else {
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  }
})
