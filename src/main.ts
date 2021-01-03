import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "normalize.css"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './router/permissions'
import dpUi from './components'
const vm = createApp(App).use(store).use(dpUi).use(router).use(ElementPlus).mount('#app')
console.log(vm.$data);

