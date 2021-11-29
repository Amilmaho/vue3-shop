/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component:()=>import('../views/home/Home.vue')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component:()=>import('../views/orderConfirmation/OrderConfirmation.vue')
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component:()=>import('../views/orderList/OrderList.vue')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component:()=>import('../views/cartList/CartList.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component:()=>import('../views/shop/Shop.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? { name: 'home' } : next()
    }
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/login/Login.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      isLogin ? { name: 'home' } : next()
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  isLogin ||  (to.name ==='Login' || to.name === 'Register') ? next() : next({ name: 'Login' })
})

export default router
