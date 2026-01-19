<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'

export default defineComponent({
  name: 'TheNavigation',
  computed: {
    coffeeD() {
      return CoffeeData.coffee
    },
  },
})
</script>

<template>
  <header>
    <nav id="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink
        v-for="coffee in coffeeD"
        :key="coffee.id"
        :to="{ name: 'coffee', params: { CoffeeSlug: coffee.slug } }"
      >
        {{ coffee.name }}
      </RouterLink>
      <RouterLink to="/cart">Košík</RouterLink>
    </nav>
  </header>

  <div class="kos">
    <RouterView />
  </div>
</template>
