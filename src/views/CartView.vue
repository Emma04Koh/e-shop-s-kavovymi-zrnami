<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import CoffeeData from '@/assets/data.json'
import type { Coffee } from './HomeView.vue'

export default defineComponent({
  name: 'CartView',
  setup() {
    const cart = useCartStore()
    const router = useRouter()

    const goToCheckout = () => {
      if (cart.items.length > 0) {
        router.push('/checkout')
      } else {
        alert('Košík je prázdny')
      }
    }

    return { cart, goToCheckout }
  },
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
  <div class="cart">
    <h1>Váš košík</h1>

    <div v-if="cart.items.length === 0" class="empty">
      <p>Košík je prázdny.</p>
      <button @click="$router.push('/')">Nákup pokračovať</button>
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.slug" class="cart-item">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} € / ks</p>
        </div>

        <div class="quantity-controls">
          <button @click="cart.decreaseQuantity(item.slug)">−</button>
          <span>{{ item.quantity }}</span>
          <button @click="cart.increaseQuantity(item.slug)">+</button>
        </div>

        <div class="item-total">{{ (item.price * item.quantity).toFixed(2) }} €</div>

        <button class="remove-btn" @click="cart.removeItem(item.slug)">Odstrániť</button>
      </div>

      <div class="cart-summary">
        <p><strong>Celkom položiek:</strong> {{ cart.totalItems }}</p>
        <p><strong>Celková cena:</strong> {{ cart.totalPrice }} €</p>
        <button class="checkout-btn" @click="goToCheckout">Prejsť k objednávke</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}
.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}
.item-info h3 {
  margin: 0 0 0.4rem;
}
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.quantity-controls button {
  width: 32px;
  height: 32px;
  font-size: 1.1rem;
  background: #50322c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.remove-btn {
  background: #a94442;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}
.cart-summary {
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
}
.checkout-btn {
  background: #50322c;
  color: white;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}
.empty {
  text-align: center;
  padding: 4rem 1rem;
}
</style>
