import input from './input.vue'
import select from './select.vue'
import number from './number.vue'
import date from './date.vue'
import text from './text.vue'
import row from './row.vue'
import col from './col.vue'
import { error } from '@/utils/debug'

class Store {
  componentMap = new Map()

  constructor() {
    this.componentMap.set('input', input)
    this.componentMap.set('select', select)
    this.componentMap.set('number', number)
    this.componentMap.set('date', date)
    this.componentMap.set('text', text)
    this.componentMap.set('row', row)
    this.componentMap.set('col', col)
  }

  add(name, component) {
    if (this.componentMap.has(name)) {
      return error(name, `${name} 组件名称已被注册，请注册新的组件名称`)
    }
    this.componentMap.set(name, component)
  }

  has(name) {
    return this.componentMap.has(name)
  }

  get(name) {
    return this.componentMap.get(name)
  }
}

export default new Store()
