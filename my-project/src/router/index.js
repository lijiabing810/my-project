import Vue from 'vue'
import Router from 'vue-router'
import routes from './list'

Vue.use(Router)
// 路由重复点击异常处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes
})
