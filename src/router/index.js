import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import('@/views/login')
    },
    {
      path: '/',
      name: '首页',
      component: () => import('@/views/index')
    },
    {
      path: '/error',
      name: '错误',
      component: () => import('@/views/error'),
      meta: { title: '错误', index: -1 }
    },
    { path: '*', redirect: '/', hidden: true }
  ]
})
