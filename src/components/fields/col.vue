<script>
import staticFieldMixin from '@/mixins/static-field-mixin'

export default {
  name: 'FieldCol',

  mixins: [staticFieldMixin],

  render() {
    return <el-col {...this.VNodeData}>{this.$slots.default}</el-col>
  }
}
</script>
