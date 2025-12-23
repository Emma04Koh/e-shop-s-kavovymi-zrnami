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
        <div v-for="bean in coffee" :key="bean.id" class="coffee-item">
          <RouterLink :to="{ name: 'bean', params: { BeanSlug: bean.slug } }">
            <img :src="`/images/${bean.image}`" :alt="bean.name" />
          </RouterLink>
          <h2>{{ bean.name }}</h2>
          <p>{{ bean.region_info }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
