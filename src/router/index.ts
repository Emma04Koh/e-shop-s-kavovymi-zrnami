import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoffeeView from '@/views/CoffeeView.vue'
import BeansView from '@/views/BeansView.vue'
import BeanDetail from '@/components/BeanDetail.vue'

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
      redirect: { name: 'beans' },
      children: [
        {
          path: '',
          name: 'beans',
          component: BeansView,
          props: true,
        },
        {
          path: ':BeanSlug',
          name: 'bean',
          component: BeanDetail,
          props: true,
        },
      ],
    },
  ],
})

export default router
