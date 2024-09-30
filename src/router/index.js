import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/consent',
      name: 'consent',
      component: () => import('../views/ConsentView.vue')
    },
    {
      path: '/experiment',
      name: 'experiment',
      component: () => import('../views/ExperimentView.vue')
    }
  ]
})

export default router
