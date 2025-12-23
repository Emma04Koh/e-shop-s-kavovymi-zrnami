<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'

export default defineComponent({
  name: 'HomeView',
  computed: {
    coffee() {
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
        <RouterLink
          v-for="bean in coffee"
          :key="bean.id"
          :to="{ name: 'beans', params: { BeanSlug: bean.slug } }"
        >
          <img :src="'/public/images/${ bean.image }'" :alt="bean.name" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>
