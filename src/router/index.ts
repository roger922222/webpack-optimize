import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/dashboard/index.vue')
        },
        {
          path: 'react',
          component: () => import('@/pages/react.vue')
        },
        {
          path: 'vue',
          component: () => import('@/pages/vue.vue')
        },
        {
          path: 'node',
          component: () => import('@/pages/node.vue')
        },
      ]
    }
  ] 
})

export default router