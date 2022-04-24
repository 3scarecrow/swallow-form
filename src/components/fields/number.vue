<script>
import fieldMixin from '@/mixins/field-mixin'

export default {
  name: 'FieldNumber',

  mixins: [fieldMixin],

  render() {
    return (
      <el-input-number
        v-model={this.value}
        {...this.VNodeData}
      ></el-input-number>
    )
  }
}
</script>
