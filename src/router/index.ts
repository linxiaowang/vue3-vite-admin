import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [{
    path: '/',
    component: () => import('~/layout/Layout.vue'),
    name: 'Layout',
  }, {
    path: '/login',
    component: () => import('~/views/login/Login.vue'),
    name: 'Login',
  }],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach(async (to, from) => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
