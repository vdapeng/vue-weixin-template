<template>
  <div v-infinite-scroll="handleScroll" infinite-scroll-distance="10" infinite-scroll-disabled="isLastPage">
    <slot></slot>
    <div class="empty" v-if="isEmpty && !loading">
      <svg-icon icon-class="empty" />
    </div>
    <load-more :show-loading="isLoading" :tip="tip"></load-more>
  </div>
</template>

<script>
  import loadmore from '../VLoadMore/loadmore'
  export default {
    name: 'VList',
    components: {
      loadMore: loadmore
    },
    props: {
      onChange: Function,
      select: Function,
      pageSize: {
        type: Number,
        default: 10
      },
      search: {
        type: Object,
        default: function () {
          return {}
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      },
      auto: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        result: {},
        isLoading: false,
        isError: false,
        params: {
          pageNum: 1
        },
        list: []
      }
    },
    watch: {
      list (newValue) {
        if (this.onChange && typeof this.onChange === 'function') {
          this.onChange(newValue)
        }
        this.$emit('input', newValue)
      }
    },
    computed: {
      isEmpty () {
        return this.result.total === 0
      },
      isLastPage () {
        return this.result.isLastPage !== false
      },
      tip () {
        if (this.isError) {
          return '数据加载出错，请刷新重试'
        }
        if (this.isEmpty) {
          return '暂无数据'
        }
        return this.isLoading ? '数据加载中' : (this.isLastPage ? '已显示全部数据' : '下拉加载更多')
      }
    },
    mounted () {
      if (this.auto) {
        this.handleScroll()
      }
    },
    methods: {
      handleScroll () {
        if (!this.select) {
          return
        }
        this.isLoading = true
        this.result.isLastPage = true
        this.select(Object.assign(this.params, { pageSize: this.pageSize }, this.search), this.data).then(data => {
          const result = data.data
          if (result.success) {
            this.result = result.data
            this.list = [...this.list, ...result.data.list]
            this.params.pageNum++
          }
          this.isLoading = false
        }).catch((error) => {
          console.log(error)
          if (this.params.pageNum !== 1) {
            this.params.pageNum--
          }
          this.isError = true
          this.isLoading = false
        })
      }
    }
  }
</script>

<style scoped>
</style>
