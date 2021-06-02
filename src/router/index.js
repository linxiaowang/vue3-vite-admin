import { createRouter, createWebHashHistory } from 'vue-router'

// 工厂函数创建router的实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('../layouts/index.vue'),
            meta: {
                title: '导航',
                icon: 'el-icon-setting'
            },
            children: [
                {
                    path: "",
                    name: 'Home',
                    component: () => import('views/home.vue'),
                    meta: {
                        title: '首页',
                        icon: 'el-icon-s-home'
                    }
                }
            ]
        }
    ]
})

export default router
