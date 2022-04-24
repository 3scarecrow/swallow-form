<script>
import fieldMixin from '@/mixins/field-mixin'

export default {
  name: 'FieldInput',

  mixins: [fieldMixin],

  render() {
    return <el-input v-model={this.value} {...this.VNodeData}></el-input>
  }
}
</script>
