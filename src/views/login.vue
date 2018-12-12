<template>
    <div ref="dataForm">
      <svg-icon icon-class="logo" style="font-size: 8em;margin-bottom: 25px;" />
      <mt-field label="用户名" placeholder="请输入用户名" v-model="login.username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.password"></mt-field>
      <mt-button @click.native="handleLogin" size="large" style="margin-top: 15px">登录</mt-button>
    </div>
</template>

<script>
import store from '@/store'
import { Indicator, Toast } from 'mint-ui'

export default {
  name: 'login',
  data () {
    return {
      redirect: '/',
      login: {
        username: '',
        password: ''
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin () {
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })
      store.dispatch('Login', this.login).then(() => {
        Indicator.close()
        Toast({
          message: '登录成功',
          duration: 2000
        })
        setTimeout(() => {
          this.$router.push({ path: this.redirect || '/' })
        }, 2000)
      }).catch(() => {
        Indicator.close()
        Toast({
          message: '登录失败'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
