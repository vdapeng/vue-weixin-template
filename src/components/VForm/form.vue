<template>
  <form @submit.prevent="handleSubmit" :class="customClass">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'VForm',
  componentName: 'VForm',
  props: {
    rules: Object,
    onSubmit: Function,
    customClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fields: [],
      validateState: true
    }
  },
  created () {
    this.$on('addField', filed => {
      this.fields.push(filed)
    })
    this.$on('removeField', field => {
      this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  methods: {
    handleSubmit () {
      if (this.onSubmit) this.onSubmit()
    },
    validate (callback) {
      if (this.fields.length === 0 && callback) {
        callback(true)
      }
      let promise
      if (typeof callback !== 'function' && window.Promise) {
        callback = function (valid) {
          valid ? resolve(valid) : reject(valid);
        }
      }
      let valid = true
      let count = 0
      let invalidFields = {}
      this.fields.forEach(field => {
        field.validate((message, field) => {
          if (message) {
            valid = false
          }
          invalidFields =  Object.assign({}, invalidFields, field)
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid, invalidFields)
          }
        })
      })
      if (promise) {
        return promise
      }
    },
    resetField () {
      if (this.fields && this.fields.length > 0) {
        this.fields.forEach(field => {
          field.resetField()
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
