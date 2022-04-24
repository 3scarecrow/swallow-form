<script>
import staticFieldMixin from '@/mixins/static-field-mixin'

export default {
  name: 'FieldRow',

  mixins: [staticFieldMixin],

  render() {
    return <el-row {...this.VNodeData}>{this.$slots.default}</el-row>
  }
}
</script>
