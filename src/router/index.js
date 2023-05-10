import { createRouter, createWebHashHistory } from 'vue-router'
const Login =() => import('@/components/Login/index.vue')
const HomePage = ()=> import('@/views/homePage.vue/')
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home', 
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    
})

export default router