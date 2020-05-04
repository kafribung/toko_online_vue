import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Detail from '../views/Detail'
import Shopping from '../views/Shopping'
import Success from '../views/Success'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail/:slug',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/shopping',
        name: 'Shopping',
        component: Shopping
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    }
]

const router = new VueRouter({
    routes
})

export default router