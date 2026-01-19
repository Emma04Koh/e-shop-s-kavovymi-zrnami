<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'
import BeanCard from '@/components/BeanCard.vue'
import type { CoffeeBean } from '@/types/coffee'

export default defineComponent({
  name: 'BeansView',
  components: { BeanCard },
  props: {
    CoffeeSlug: { type: String, required: true },
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    beans(): CoffeeBean[] {
      const coffee = CoffeeData.coffee.find((c) => c.slug === this.CoffeeSlug)
      return coffee?.beans || []
    },
    filteredBeans(): CoffeeBean[] {
      if (!this.search.trim()) return this.beans
      const term = this.search.toLowerCase().trim()
      return this.beans.filter(
        (bean) =>
          bean.name.toLowerCase().includes(term) ||
          bean.taste_notes.toLowerCase().includes(term) ||
          bean.description.toLowerCase().includes(term),
      )
    },
  },
})
</script>

<template>
  <div class="beans">
    <div class="search-container">
      <input
        v-model="search"
        type="text"
        placeholder="Hľadajte podľa názvu, chute alebo popisu..."
      />
    </div>

    <div v-if="filteredBeans.length === 0 && search" class="no-results">
      <p>Žiadne zrná nevyhovujú hľadaniu „{{ search }}“</p>
    </div>

    <div class="cards">
      <RouterLink
        v-for="bean in filteredBeans"
        :key="bean.slug"
        :to="{ name: 'bean', params: { CoffeeSlug, BeanSlug: bean.slug } }"
      >
        <BeanCard :bean="bean" />
      </RouterLink>
    </div>
  </div>
</template>
