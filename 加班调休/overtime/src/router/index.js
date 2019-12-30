import Vue from 'vue'
import VueRouter from 'vue-router'
import pend from '../views/pend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    redirect:'/home/pend',
    children:[
      {
        path: 'pend',
        name: 'pend',
        component: pend,
        redirect:'/home/pend/work',
        children:[
          {
            path: 'work',
            name: 'work',
            component: () => import(/* webpackChunkName: "work" */ '../views/work.vue')
          },{
            path: 'vacation',
            name: 'vacation',
            component: () => import(/* webpackChunkName: "vacation" */ '../views/vacation.vue')
          },
        ]
      },
      {
        path: 'being',
        name: 'being',
        component: () => import(/* webpackChunkName: "being" */ '../views/being.vue'),
        redirect:'/home/being/work',
        children:[
          {
            path: 'work',
            name: 'work',
            component: () => import(/* webpackChunkName: "work" */ '../views/work.vue')
          },{
            path: 'vacation',
            name: 'vacation',
            component: () => import(/* webpackChunkName: "vacation" */ '../views/vacation.vue')
          },
        ]
      },
      {
        path: 'after',
        name: 'after',
        component: () => import(/* webpackChunkName: "after" */ '../views/after.vue'),
        redirect:'/home/after/work',
        children:[
          {
            path: 'work',
            name: 'work',
            component: () => import(/* webpackChunkName: "work" */ '../views/work.vue')
          },{
            path: 'vacation',
            name: 'vacation',
            component: () => import(/* webpackChunkName: "vacation" */ '../views/vacation.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
