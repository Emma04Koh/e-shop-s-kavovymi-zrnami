import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BeanView from '@/views/BeanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bean/:BeanSlug',
      name: 'bean',
      component: BeanView,
      props: true,
    },
  ],
})

export default router
