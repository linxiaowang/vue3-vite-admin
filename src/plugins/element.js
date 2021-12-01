
import 'element-plus/dist/index.css'
import {
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElButton,
    ElButtonGroup,
    ElHeader,
    ElIcon,
    ElImage,
    ElInput,
    ElForm,
    ElFormItem,
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
    ElDropdownItem,
    ElForm,
    ElFormItem,
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