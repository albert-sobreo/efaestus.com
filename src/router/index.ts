import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YaPOSView from '@/views/YaPOSView.vue'
import AboutView from '@/views/AboutView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapos',
    name: 'yapos',
    component: YaPOSView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
