
import { checkAuthorization } from 'utils/athorization'
// 不需要登录拦截的路由配置
const loginIgnore = {
  names: ['404', '403'],      //根据路由名称匹配
  paths: ['/login'],   //根据路由fullPath匹配
  /**
   * 判断路由是否包含在该配置中
   * @param route vue-router 的 route 对象
   * @returns {boolean}
   */
  includes(route) {
    return this.names.includes(route.name) || this.paths.includes(route.path)
  }
}

/**
 * 登录守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
export const loginGuard = (to, from, next, ElMessage) => {
  if (!loginIgnore.includes(to) && !checkAuthorization()) {
    ElMessage.warning('登录已失效，请重新登录')
    next({ path: '/login' })
  } else {
    next()
  }
}