<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'
import type { Coffee } from '@/types/coffee'

export default defineComponent({
  name: 'CoffeeView',
  props: {
    CoffeeSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    coffee() {
      const coffee = CoffeeData.coffee as Coffee[]
      return coffee.find((c) => c.slug === this.CoffeeSlug)
    },
  },
})
</script>

<template>
  <button class="button" @click="$router.push('/')">Naspäť</button>

  <div class="coffee-details">
    <div class="coffee-text">
      <h1>{{ coffee?.name }}</h1>

      <p><strong>Región:</strong> {{ coffee?.region_info }}</p>
      <p>{{ coffee?.description }}</p>
    </div>
    <img :src="`/images/${coffee?.image}`" :alt="coffee?.name" />
  </div>

  <RouterView />
</template>
