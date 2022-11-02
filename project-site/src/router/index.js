import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/bag',
    name: 'bag',
    component: () => import('../views/BagView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
