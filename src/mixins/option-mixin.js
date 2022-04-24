import { isFunction, isArray, isPromise } from '@/utils/types'
import { ensurePromise } from '@/utils/helpers'

export default {
  data() {
    return {
      internalOptions: []
    }
  },

  watch: {
    'field.options': {
      immediate: true,
      handler() {
        const setOptions = (options) => {
          if (isArray(options)) {
            this.internalOptions = options
          }
        }

        const { options } = this.field
        const optionsPromise = this.resolveOptions(options, setOptions)
        if (optionsPromise) {
          this.loading = true
          optionsPromise.then(setOptions).finally(() => {
            this.loading = false
          })
        }
      }
    }
  },

  methods: {
    resolveOptions(options, done) {
      let optionsPromise = null
      if (options) {
        if (isArray(options)) {
          optionsPromise = Promise.resolve(options)
        } else if (isFunction(options)) {
          optionsPromise = ensurePromise(options(done))
        } else if (isPromise(options)) {
          optionsPromise = options
        }
      }
      return optionsPromise
    }
  }
}
