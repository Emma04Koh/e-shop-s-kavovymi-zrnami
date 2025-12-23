<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'

export type CoffeeBean = {
  name: string
  slug: string
  image: string
  price: number
  stock: number
  taste_notes: string
  description: string
  grind_options: string[]
}

export type Coffee = {
  name: string
  slug: string
  image: string
  id: number
  description: string
  region_info: string
  beans: CoffeeBean[]
}

export default defineComponent({
  name: 'HomeView',
  computed: {
    coffeeD(): Coffee[] {
      return CoffeeData.coffee
    },
  },
})
</script>

<template>
  <main>
    <div class="home">
      <h1>Kávové zrná k Vaším službám</h1>
      <div class="coffee">
        <div v-for="coffee in coffeeD" :key="coffee.id" class="coffee-item">
          <RouterLink :to="{ name: 'coffee', params: { CoffeeSlug: coffee.slug } }">
            <img :src="`/images/${coffee.image}`" :alt="coffee.name" />
          </RouterLink>
          <h2>{{ coffee.name }}</h2>
          <p>{{ coffee.region_info }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
