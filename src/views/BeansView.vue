<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'
import BeanCard from '@/components/BeanCard.vue'
import type { Coffee, CoffeeBean } from './HomeView.vue'

export default defineComponent({
  name: 'BeansView',
  components: {
    BeanCard,
  },
  props: {
    CoffeeSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    beans() {
      const coffee = CoffeeData.coffee.find((c) => c.slug === this.CoffeeSlug)
      return coffee?.beans as CoffeeBean[]
    },
  },
})
</script>

<template>
  <div class="beans">
    <div class="cards">
      <RouterLink
        v-for="bean in beans"
        :key="bean.name"
        :to="{ name: 'bean', params: { BeanSlug: bean.slug } }"
      >
        <BeanCard :bean="bean" />
      </RouterLink>
    </div>
  </div>
</template>
