<template>
  <div class="error">
    <svg-icon icon-class="error"/>
    <p>微信授权失败，试试手动登录吧~ <router-link :to="{path: 'login', query: {redirect: redirect}}">登录</router-link></p>
  </div>
</template>

<script>
  export default {
    name: 'error',
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
    }
  }
</script>

<style scoped>
  .error {
    position: absolute;
    left: 0;
    right: 0;
    top: 120px;
    text-align: center;
  }
  .error > svg {
    font-size: 8em;
  }
  .error a {
    text-decoration: none;
  }
</style>
