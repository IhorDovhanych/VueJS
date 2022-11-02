import { createRouter, createWebHistory } from 'vue-router'
import IconsTable from '@/pages/IconsTable'
import About from '@/pages/About'

const routes = [
  {
    path: '/',
    name: 'IconsTable',
    component: IconsTable
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
