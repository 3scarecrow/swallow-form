<script>
import { isArray, isNumber, isString, isFunction } from '@/utils/types'
import { has, get } from './fields'
import { normalizeAttrs, ensureFunction } from '@/utils/helpers'

export default {
  name: 'SwallowForm',

  inheritAttrs: false,

  props: {
    fields: { type: Array, default: () => [] }
  },

  data() {
    return {
      internalFields: []
    }
  },

  computed: {
    mergedAttrs() {
      return Object.assign({ size: 'small' }, this.$attrs)
    }
  },

  watch: {
    fields: {
      handler(val) {
        this.internalFields = val
      },
      immediate: true
    }
  },

  methods: {
    validate(...arg) {
      return this.$refs.elForm.validate(...arg)
    },

    validateField(...arg) {
      return this.$refs.elForm.validateField(...arg)
    },

    resetFields(...arg) {
      return this.$refs.elForm.resetFields(...arg)
    },

    clearValidate(...arg) {
      return this.$refs.elForm.clearValidate(...arg)
    },

    // field 为数组类型时，格式化为 row 组件配置
    normalizeField(field) {
      return isArray(field) ? { type: 'row', children: field } : field
    },

    renderFields() {
      return this.fields.map((field) => this.renderField(field))
    },

    renderField(_field) {
      const { model } = this.$attrs
      const renderArgs = { model, renderField: this.renderField }
      const field = this.normalizeField(_field)
      if (isFunction(field)) return field(renderArgs)

      const { visible, prop } = field
      const args = { model, prop }
      if (ensureFunction(visible)(args) === false) return null

      const Children = this.renderChildren(field)
      const Item = this.renderFormItem(field, Children)
      const Layout = this.renderLayout(field, Item)
      return Layout
    },

    renderChildren(field) {
      const { model } = this.$attrs
      const { renderField } = this
      const { render, type, children, slots = {} } = field
      // render 优先级高于 slots 和 children 配置
      if (isFunction(render)) {
        return render({ model, renderField })
      }

      let Content, Children
      // slots 的 default 插槽默认优先级高于 children
      if (slots.default) {
        Children = slots.default()
      } else if (isArray(children)) {
        Children = children.map((child) => renderField(child))
      }

      if (has(type)) {
        const PresetComponent = get(type)
        Content = (
          <PresetComponent field={field} field-model={model}>
            {Children}
          </PresetComponent>
        )
      }

      return Content || Children
    },

    renderFormItem(field, children) {
      const { item } = field
      const props = isString(item) ? { label: item } : item
      return item ? (
        <el-form-item {...{ props }}>{children}</el-form-item>
      ) : (
        children
      )
    },

    renderLayout(field, children) {
      const { layout } = field
      const props = isNumber(layout) ? { span: layout } : layout
      return layout ? <el-col {...{ props }}>{children}</el-col> : children
    }
  },

  render() {
    return (
      <el-form ref="elForm" {...normalizeAttrs({ props: this.mergedAttrs })}>
        {this.renderFields()}
      </el-form>
    )
  }
}
</script>
