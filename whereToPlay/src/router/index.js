import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/table/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'default',
      // component: HomeView
      component: () => import('../views/table/index.vue')
    },
    {
      path: '/whereToGo',
      name: 'whereToGo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/table/index.vue')
    },
    {
      path: '/lizi',
      name: 'whereToGo',
      component: () => import('../views/table/lizi.vue')
    }
  ]
})

export default router
