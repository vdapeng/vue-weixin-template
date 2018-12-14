<template>
    <div class="app-container">
      <div style="text-align: center;align-items: center;">
        <p>扫码预览本项目(测试时使用)</p>
      </div>
      <v-list :select="find"></v-list>
    </div>
</template>

<script>
import {URI} from '@/utils/hrefUtil'
import VList from '../components/VList/list'

export default {
  name: 'index',
  components: {
    VList
  },
  data () {
    return {
      URI: URI()
    }
  },
  methods: {
    find () {
      let promise
      promise = new window.Promise((resolve) => {
        let result = {}
        result.data = {data: {success: true}}
        setTimeout(() => {
          resolve({result})
        }, 2000)
      })
      return promise
    }
  }
}
</script>

<style scoped>
.app-container {
  padding: 15px;
}
</style>
