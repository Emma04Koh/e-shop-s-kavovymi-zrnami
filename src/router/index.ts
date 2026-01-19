import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoffeeView from '@/views/CoffeeView.vue'
import BeansView from '@/views/BeansView.vue'
import BeanDetail from '@/components/BeanDetail.vue'
import CartView from '@/views/CartView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CheckoutView from '@/views/CheckoutView.vue'

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
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
