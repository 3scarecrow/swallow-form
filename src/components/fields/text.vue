<script>
import fieldMixin from '@/mixins/field-mixin'

export default {
  name: 'FieldText',

  mixins: [fieldMixin],

  render() {
    return <div class="swallow-form__field__text">{this.value}</div>
  }
}
</script>
