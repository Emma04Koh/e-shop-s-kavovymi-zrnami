<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CartView',
  props: {
    CoffeeSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      router: useRouter(),
      cart: useCartStore(),
    }
  },
  methods: {
    goToCheckout() {
      if (this.cart.items.length > 0) {
        this.router.push('/checkout')
      } else {
        alert('Kosik je prazdny')
      }
    },
  },
})
</script>

<template>
  <div class="cart">
    <h1>Vas kosik</h1>

    <div v-if="cart.items.length === 0" class="empty">
      <p>Kosik je prazdny.</p>
      <button @click="$router.push('/')">Pokračovať v nakupovaní</button>
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.slug" class="cart-item">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} € / ks</p>
        </div>

        <div class="quantity-controls">
          <button @click="cart.decreaseQuantity(item.slug)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="cart.increaseQuantity(item.slug)">+</button>
        </div>

        <div class="item-total">{{ (item.price * (item.quantity || 0)).toFixed(2) }} €</div>

        <button class="remove-btn" @click="cart.removeItem(item.slug)">Odstranit</button>
      </div>

      <div class="cart-summary">
        <p><strong>Celkom poloziek:</strong> {{ cart.totalItems }}</p>
        <p><strong>Celkova cena:</strong> {{ cart.totalPrice }} €</p>
        <button class="checkout-btn" @click="goToCheckout">Prejsť k objednavke</button>
      </div>
    </div>
  </div>
</template>
