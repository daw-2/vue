import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hello/:name',
      component: () => import('../views/HelloView.vue')
    },
    {
      path: '/todo/:id',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/todo/create',
      component: () => import('../views/TodoCreateView.vue')
    }
  ]
})

export default router
