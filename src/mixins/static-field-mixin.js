import { pick } from '@/utils/helpers'

export default {
  props: {
    field: {
      type: Object,
      default: () => ({})
    },
    renderFields: {
      type: Function
    }
  },

  computed: {
    VNodeData() {
      return pick(this.field, ['props', 'style', 'class'])
    }
  }
}
