<template>
    <div class="app-container">
      <div style="text-align: center;align-items: center;">
        <qrcode :value="URI"></qrcode>
        <divider>扫码预览本项目(测试时使用)</divider>
      </div>
    </div>
</template>

<script>
import { Qrcode, Divider } from 'vux'

export default {
  name: 'index',
  components: {
    Qrcode, Divider
  },
  data () {
    return {
      URI: window.location.href
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 15px;
}
</style>
