<template>
    <div ref="dataForm">
      <x-icon type="ios-ionic-outline"></x-icon>
      <group>
       <x-input title="用户名"></x-input>
      </group>
      <group>
        <x-input title="密码"></x-input>
      </group>
      <group style="margin: 0px 15px;">
        <x-button @click.native="login()">登录</x-button>
      </group>
    </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'login',
  data () {
    return {
      redirect: '/'
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
    login () {
      store.dispatch('Login', this.login).then(() => {
        this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        console.log('error')
      })
    }
  }
}
</script>

<style scoped>

</style>
