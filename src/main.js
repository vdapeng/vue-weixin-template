// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router'
import store from './store'
import './permission'
// import './wxJsConfig'
import { LoadingPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, Group, Cell, XButton, XInput } from 'vux'
import { InfiniteScroll } from 'mint-ui'
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(InfiniteScroll)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)

Vue.config.silent = true

Vue.use(require('vue-wechat-title'))

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
