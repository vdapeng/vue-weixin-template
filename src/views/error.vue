<template>
    <div class="error">
      <svg-icon icon-class="error"/>
      <p>微信授权失败，试试手动登录吧~ <router-link to="login">登录</router-link></p>
    </div>
</template>

<script>
  export default {
    name: 'error'
  }
</script>

<style scoped>
  .error {
    position: absolute;
    left: 0;
    right: 0;
    top: 120px;
  }
  .error > svg {
    font-size: 8em;
  }
  .error a {
    text-decoration: none;
  }
</style>
