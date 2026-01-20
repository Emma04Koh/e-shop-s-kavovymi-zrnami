<script lang="ts">
import { defineComponent } from 'vue'
import CoffeeData from '@/assets/data.json'
import { useCartStore } from '@/stores/cart'
import type { CoffeeBean, Coffee } from '@/types/coffee'

export default defineComponent({
  name: 'BeanDetail',
  props: {
    CoffeeSlug: {
      type: String,
      required: true,
    },
    BeanSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    bean() {
      const coffee = CoffeeData.coffee.find((c) => c.slug === this.CoffeeSlug)
      return coffee?.beans.find((b) => b.slug === this.BeanSlug)
    },
  },
  methods: {
    addToCart(bean: CoffeeBean) {
      const cartStore = useCartStore()
      cartStore.addItem(bean)
      alert('Pridané do košíka!')
    },
    goBack() {
      this.$router.go(-1)
    },
  },
})
</script>

<template>
  <button class="button" @click="goBack">Späť na zoznam</button>
  <div v-if="bean" class="coffee-details">
    <div class="coffee-text">
      <h1>{{ bean.name }}</h1>
      <p><strong>Cena:</strong> {{ bean.price }} €</p>
      <p><strong>Skladom:</strong> {{ bean.stock }} ks</p>
      <p><strong>Chuťové tóny:</strong> {{ bean.taste_notes }}</p>
      <p>{{ bean.description }}</p>
      <p><strong>Možnosti mletia:</strong> {{ bean.grind_options.join(', ') }}</p>
      <button class="button" @click="addToCart(bean)">Pridať do košíka</button>
    </div>
    <img :src="`../../images/${bean.image}`" :alt="bean.name + 'help'" />
  </div>
  <div v-else>
    <p>Bean not found.</p>
  </div>
</template>
