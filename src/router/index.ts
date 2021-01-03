import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const req = require.context('./modules', false, /\.(j|t)s$/);
let children: Array<RouteRecordRaw> = []
req.keys().forEach(key => {
  children = children.concat(req(key).default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */  '@/views/login/index')
  },
  {
    path: '/',
    name: "Layout",
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index'),
    children
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
