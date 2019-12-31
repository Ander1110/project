import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ '../views/main.vue'),
    redirect:'/main/home',
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'bookstore',
        name: 'bookstore',
        component: () => import(/* webpackChunkName: "bookstore" */ '../views/Bookstore.vue')
      },
      {
        path: 'classity',
        name: 'classity',
        component: () => import(/* webpackChunkName: "classity" */ '../views/Classity.vue')
      },
      {
        path: 'ranking',
        name: 'ranking',
        component: () => import(/* webpackChunkName: "ranking" */ '../views/Ranking.vue')
      }
    ]
  },
  {
    path: '/tab1',
    name: 'tab1',
    component: () => import(/* webpackChunkName: "tab1" */ '../views/Tab1.vue')
  },
  {
    path: '/tab2',
    name: 'tab2',
    component: () => import(/* webpackChunkName: "tab2" */ '../views/Tab2.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
