<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'
import type { Coffee } from '@/types/coffee'

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
          <RouterLink :to="{ name: 'beans', params: { CoffeeSlug: coffee.slug } }">
            <img :src="`images/${coffee.image}`" :alt="coffee.name" />
          </RouterLink>
          <h2>{{ coffee.name }}</h2>
          <p>{{ coffee.region_info }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
