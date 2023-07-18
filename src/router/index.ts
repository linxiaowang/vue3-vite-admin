import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [{
    path: '/',
    component: () => import('~/layout/Layout.vue'),
    name: 'Root',
  }, {
    path: '/login',
    component: () => import('~/views/login/Login.vue'),
    name: 'Login',
  }],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
