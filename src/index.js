import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SwallowForm from '@/components/swallow-form'
import { register } from '@/components/fields'

Vue.use(ElementUI)

function bindInstall(name, component) {
  const install = (vue) => vue.component(name, component)

  component.install = install

  window && window.Vue && install(window.Vue)

  return component
}

export default bindInstall(SwallowForm.name, SwallowForm)
export { SwallowForm, register }
