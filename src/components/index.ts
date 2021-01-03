
import { App } from 'vue';
import { default as Form } from './Form';
import { default as Input } from './Input'

const components = [
  Form,
  Input
]

const install = function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}


/**
 * 单个组件导出
 */
export {
  Form,
  Input
}


/**
 * 全部导出
 */
export default {
  install
}