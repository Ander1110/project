import Detail from '../views/Detail/index'
import Login from '../views/Login/index'
import Home from '../views/Home/index'

import Classity from '../views/Home/pages/Classity'
import Cart from '../views/Home/pages/Cart'

const routes = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home,
    children:[
      {
        path:'/home',
        redirect:"/home/classity"
      },
      {
        path:"/home/classity",
        component:Classity
      },
      {
        path:"/home/cart",
        component:Cart
      }
    ]
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/detail",
    component:Detail
  }
]

export default routes