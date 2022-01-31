import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserInfo from '@/views/UserInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:login',
    name: 'UserInfo',
    component: UserInfo,
    props: true
  },
  {
    path: '/choosen-users',
    name: 'ChoosenUsers',
    component: () => import('../views/ChoosenUsers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
