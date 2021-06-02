import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * Note: 子菜单仅当路由的children.length >= 1时才出现
 *
 * hidden: true                   设置为true时路由将显示在sidebar中(默认false)
 * alwaysShow: true               如果设置为true则总是显示在菜单根目录
 *                                如果不设置alwaysShow, 当路由有超过一个子路由时,
 *                                将会变为嵌套模式, 否则不会显示根菜单
 * redirect: noRedirect           如果设置noRedirect时，breadcrumb中点击将不会跳转
 * name:'router-name'             name用于<keep-alive> (必须设置!!!)
 * meta : {
    roles: ['admin','editor']    页面可访问角色设置 
    title: 'title'               sidebar和breadcrumb显示的标题 
    icon: 'svg-name'/'el-icon-x' sidebar中显示的图标
    breadcrumb: false            设置为false，将不会出现在面包屑中
    activeMenu: '/example/list'  如果设置一个path, sidebar将会在高亮匹配项
  }
 */
// 工厂函数创建router的实例
export const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'layout',
        component: () => import('../layouts/index.vue'),
        meta: {
            title: '导航',
            icon: 'el-icon-setting'
        },
        children: [
            {
                path: "home",
                name: 'Home',
                component: () => import('views/home.vue'),
                meta: {
                    title: '首页',
                    icon: 'el-icon-s-home'
                }
            },
            {
                path: "chart",
                name: 'chart',
                component: () => import('views/chart.vue'),
                meta: {
                    title: '图表',
                    icon: 'el-icon-pie-chart'
                }
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
