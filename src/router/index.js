import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'home',
        component:()=> import('@/views/content/home/index.vue')
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:()=> import('@/views/content/detail/index.vue')
    },
    {
        path:'/search',
        name: 'search',
        component:()=> import('@/views/content/search/index.vue')
    },
    {
        path: '/cart',
        name:'cart',
        component:()=> import('@/views/content/cart/index.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component:()=> import('@/views/content/mine/index.vue')
    }

]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router