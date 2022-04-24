import { isDef, isUndef } from '@/utils/types'
import { ensureFunction, get } from '@/utils/helpers'
import { error } from '@/utils/debug'

export default {
  props: {
    field: {
      type: Object,
      default: () => ({})
    },
    fieldModel: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    value: {
      set(val) {
        const { fieldModel } = this
        const { type, prop } = this.field
        if (isUndef(prop)) {
          return error(
            'swallow-form',
            `el-${type} 组件更新值缺少 fieldKey 或 prop 属性`
          )
        }
        if (!prop.includes('.')) {
          this.setValue(fieldModel, prop, val)
        } else {
          const index = prop.lastIndexOf('.')
          const prefixKey = prop.slice(0, index)
          const assignObject = get(fieldModel, prefixKey)
          if (isUndef(assignObject)) {
            return error(
              'swallow-form',
              `el-${type} 组件更新深度属性 ${prop} 的值，属性对象不存在`
            )
          }
          this.setValue(assignObject, prop.slice(index + 1), val)
        }
      },

      get() {
        const { fieldModel } = this
        const { type, prop } = this.field
        if (isUndef(prop)) return
        if (!prop.includes('.')) {
          return fieldModel[prop]
        } else {
          const index = prop.lastIndexOf('.')
          const prefixKey = prop.slice(0, index)
          const assignObject = get(fieldModel, prefixKey)
          if (isUndef(assignObject)) {
            return error(
              'swallow-form',
              `el-${type} 组件获取深度属性 ${prop} 的值，属性对象不存在`
            )
          }
          return assignObject[prop.slice(index + 1)]
        }
      }
    },

    VNodeData() {
      const { fieldModel, privateProps } = this
      const {
        disabled,
        prop,
        props,
        on,
        // slots,
        style,
        class: className
      } = this.field
      if (isDef(disabled)) {
        const args = { model: fieldModel, prop }
        props.disabled = ensureFunction(disabled)(args)
      }
      const mergedProps = Object.assign({}, privateProps, props)
      const mergedEvents = Object.assign({}, on)
      const defaultStyle = { width: '100%' }
      return {
        style: Object.assign(defaultStyle, style),
        class: className,
        props: mergedProps,
        on: mergedEvents
      }
    }
  },

  methods: {
    setValue(obj, key, value) {
      isUndef(obj[key]) ? this.$set(obj, key, value) : (obj[key] = value)
    }
  }
}
