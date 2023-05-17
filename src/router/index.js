import { createRouter, createWebHashHistory } from 'vue-router'
const Login =() => import('@/components/Login/index.vue')
const HomePage = ()=> import('@/views/homePage.vue/')
const Epideimc = () => import('@/views/epidemic/index.vue')
const  Home =() => import('@/views/home.vue')
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home', 
        component: Home
    },
    {
        path: '/epidemic',
        component: Epideimc

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    
})

export default router