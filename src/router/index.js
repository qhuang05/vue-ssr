// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router


import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index.vue'
import Detail from '@/views/detail.vue'

Vue.use(Router)

// 路由配置
const routes =
  [
    // 客户端没有编译器，这里要写成渲染函数
    { path: "/", component: Index },
    { path: "/detail", component: Detail }
  ]

// 不同之处，这里应该是创建路由器实例的工厂函数
export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  })
}