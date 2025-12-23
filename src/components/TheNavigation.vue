<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'

export default defineComponent({
  name: 'TheNavigation',
  computed: {
    coffee() {
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
        v-for="bean in coffee"
        :key="bean.id"
        :to="{ name: 'bean', params: { BeanSlug: bean.slug } }"
      >
        {{ bean.name }}
      </RouterLink>
    </nav>
  </header>

  <div class="kos">
    <RouterView />
  </div>
</template>
