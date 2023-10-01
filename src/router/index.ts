import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/administracion',
        name: 'Administration',
        component: () => import(/* webpackChunkName: "Administration" */ '../views/Administration.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
    },
    {
        path: '/lista-productos',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "ProductList" */ '../views/ProductList.vue')
    },
    {
        path: '/detalle-producto/:idProduct(\\d+)',
        name: 'ProductDetail',
        component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/ProductDetail.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router