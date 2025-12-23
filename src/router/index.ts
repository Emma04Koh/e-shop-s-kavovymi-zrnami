import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoffeeView from '@/views/CoffeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coffee/:CoffeeSlug',
      name: 'coffee',
      component: CoffeeView,
      props: true,
    },
  ],
})

export default router
