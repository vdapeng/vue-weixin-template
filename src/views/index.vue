<template>
    <div class="app-container">
      <div style="text-align: center;align-items: center;">
        <p>扫码预览本项目(测试时使用)</p>
      </div>
    </div>
</template>

<script>
import {URI} from '@/utils/hrefUtil'

export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      URI: URI()
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 15px;
}
</style>
