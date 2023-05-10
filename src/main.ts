import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router/index.js'
import *as ElementPlusIconsVue from '@element-plus/icons-vue'
const app =  createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
app.use(router).mount('#app')
