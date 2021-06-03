
import 'element-plus/packages/theme-chalk/src/base.scss'
import {
    
    ElAvatar,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElScrollbar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
} from 'element-plus';

const components = [
    ElAvatar,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElScrollbar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
]

const plugins = [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
]
export default function (app) {
    components.forEach(component => {
        app.component(component.name, component)
    })
    plugins.forEach(plugin => {
        app.use(plugin)
    })
}