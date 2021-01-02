import { RouteRecordRaw } from 'vue-router'

const routers: Array<RouteRecordRaw> = [
  {
    path: '/error/401',
    name: 'error_401',
    component: () => import(/* webpackChunkName: "error_401" */ '@/views/error/401/index.vue')
  },
  {
    path: '/error/404',
    name: 'error_404',
    component: () => import(/* webpackChunkName: "error_404" */ '@/views/error/404/index.vue')
  },

]

export default routers;