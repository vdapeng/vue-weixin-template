<template>
  <transition>
    <mt-field :label="label" :type="type" :placeholder="placeholder" v-model="value" :state="validateState" :readonly="readonly"
              :disabled="disabled" :rows="rows" :disableClear="disableClear" :attr="attr">
      <slot></slot>
    </mt-field>
  </transition>
</template>

<script>
  import { Field } from 'mint-ui'
  import AsyncValidator from 'async-validator'

  export default {
    name: 'VFormItem',
    componentName: 'VFormItem',
    components: {
      MtField: Field
    },
    props: {
      prop: String,
      reg: {
        type: String
      },
      rules: Object,
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      placeholder: String,
      value: {},
      readonly: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 3
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disableClear: {
        type: Boolean,
        default: false
      },
      attr: {
        type: Object
      }
    },
    data () {
      return {
        validateState: '',
        isRest: false,
        validateMessage: ''
      }
    },
    watch: {
      value (val) {
        this.$emit('input', val)
        const rule = this.form.rules && this.form.rules[this.prop]
        if (!rule || rule.length === 0 || !this.prop || this.isRest) {
          this.isRest = false
        } else {
          this.validate()
        }
      }
    },
    computed: {
      form () {
        let parent = this.$parent
        let parentName = parent.$options.componentName
        while (parentName !== 'VForm') {
          parent = parent.$parent
          parentName = parent.$options.componentName
        }
        return parent
      }
    },
    mounted () {
      this.form && this.form.$emit('addField', this)
    },
    beforeDestroy () {
      this.form && this.form.$emit('removeField', this)
    },
    methods: {
      handleChange (val) {
        this.$emit('input', val)
        const rule = this.form.rules && this.form.rules[this.prop]
        if (!rule || rule.length === 0 || !this.prop || this.isRest) {
          this.isRest = false
        } else {
          this.validate()
        }
      },
      validate (callback) {
        this.isRest = false
        const rule = this.form.rules && this.form.rules[this.prop]
        if (!rule || rule.length === 0 || !this.prop) {
          return
        }
        const descriptor = {}
        descriptor[this.prop] = rule
        const validator = new AsyncValidator(descriptor)
        const model = {}
        model[this.prop] = this.value
        validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''
          if (callback) callback(this.validateMessage, invalidFields)
        })
      },
      resetField () {
        this.isRest = true
        this.value = ''
        this.validateState = ''
      }
    }
  }
</script>

<style scoped>

</style>
