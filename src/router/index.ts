import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('../views/Menu.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutUs.vue')
      },
      {
        path: '/story',
        name: 'Story',
        component: () => import('../views/OurStory.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      {
        path: '/blogdetails',
        name: '/blogdetails',
        component: () => import('../views/BlogDetails.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
