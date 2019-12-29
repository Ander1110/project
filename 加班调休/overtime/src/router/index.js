import Vue from 'vue'
import VueRouter from 'vue-router'
import pend from '../views/pend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/pend'
  },
  {
    path: '/pend',
    name: 'pend',
    component: pend,
    redirect:'/pend/work',
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
    path: '/being',
    name: 'being',
    component: () => import(/* webpackChunkName: "being" */ '../views/being.vue'),
    redirect:'/being/work',
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
    path: '/after',
    name: 'after',
    component: () => import(/* webpackChunkName: "after" */ '../views/after.vue'),
    redirect:'/after/work',
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
  }
]

const router = new VueRouter({
  routes
})

export default router
