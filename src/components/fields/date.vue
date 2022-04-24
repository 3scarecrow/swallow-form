<script>
import fieldMixin from '@/mixins/field-mixin'

export default {
  name: 'FieldInput',

  mixins: [fieldMixin],

  render() {
    return (
      <el-date-picker v-model={this.value} {...this.VNodeData}></el-date-picker>
    )
  }
}
</script>
