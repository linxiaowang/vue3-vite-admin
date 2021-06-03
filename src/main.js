import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'plugins/element'
import vm from 'virtual-module'

// 全局样式
import 'styles/index.scss'
import 'styles/tailwind.css'

console.log('virtual-module', vm)
const app = createApp(App)
app.use(router)
app.use(store)
element(app)

app.mount('#app')
