<script>
import fieldMixin from '@/mixins/field-mixin'
import optionMixin from '@/mixins/option-mixin'

export default {
  name: 'FieldSelect',

  mixins: [fieldMixin, optionMixin],

  data() {
    return {
      loading: false,
      privateProps: {
        filterable: true,
        style: { width: '100%' }
      }
    }
  },

  render() {
    return (
      <el-select
        loading={this.loading}
        v-model={this.value}
        {...this.VNodeData}
      >
        {this.internalOptions.map((option) => (
          <el-option {...{ props: option }}></el-option>
        ))}
      </el-select>
    )
  }
}
</script>
