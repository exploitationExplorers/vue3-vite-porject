import { createApp,toRaw } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router/index.js'
import *as ElementPlusIconsVue from '@element-plus/icons-vue'
import "lib-flexible/flexible.js"
import {createPinia, PiniaPluginContext} from 'pinia'


type Options = {
    key?:string
}

const __piniaKey__ : string = 'xiaoming'
const setStorage = (key:string,value:any) => {
    localStorage.setItem(key,JSON.stringify(value))
}

const getStorage = (key:string)=>{
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}


const piniaPlugin = (optons:Options)=>{
    return (context: PiniaPluginContext)=> {
        console.log(context,'context');
        const {store} = context
        // store.$subscribe(()=>{
        //     console.log('change');
        // })
        const data = getStorage(`${optons?.key ?? __piniaKey__} -- ${store.$id}`)
        console.log(data,'data')
        
        store.$subscribe(()=>{
            console.log(toRaw(store.$state));  // 转成普通对象 
            
            setStorage(`${optons?.key ?? __piniaKey__} -- ${store.$id}`, toRaw(store.$state))
        })
        console.log(store);
        return {
            ...data
        }
        
        
    }
   
}


const store = createPinia()
const app =  createApp(App)
for(const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
store.use(piniaPlugin({
    key: 'pinia'
}))
app.use(router).use(store).mount('#app')
