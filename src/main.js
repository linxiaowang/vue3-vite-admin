import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'plugins/element'

// 全局样式
import 'styles/index.scss'
import 'styles/tailwind.css'

const app =  createApp(App)
app.use(router)
app.use(store)
element(app)

app.mount('#app')
