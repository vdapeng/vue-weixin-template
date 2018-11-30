<template>
    <form ref="dataForm">
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
    </form>
</template>

<script>
import { setUserId } from '@/utils/auth'
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
      setUserId('dapeng')
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>

<style scoped>

</style>
