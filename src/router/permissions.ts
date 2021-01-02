import Router from './index'


const { beforeEach } = Router

beforeEach((to, form, next) => {
  // TODO 校验登录信息
  next()
})