<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CheckoutView',
  data() {
    return {
      cart: useCartStore(),
      router: useRouter(),
      form: {
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
      },
    }
  },
  methods: {
    submitOrder() {
      if (!this.form.name || !this.form.email || !this.form.address) {
        alert('Vyplnte prosim povinne polia')
        return
      }

      alert(
        `Dakujeme za objednavku!\n\nCelkova suma: ${this.cart.totalPrice} €\nObjednavka bola odoslana.`,
      )

      this.cart.clearCart()
      this.router.push('/')
    },
  },
})
</script>

<template>
  <div class="checkout">
    <h1>Dokoncenie objednavky</h1>

    <div class="order-summary">
      <h3>Suhhrn objednavky</h3>
      <p><strong>Poloziek:</strong> {{ cart.totalItems }}</p>
      <p><strong>Celkova cena:</strong> {{ cart.totalPrice }} €</p>
    </div>

    <form @submit.prevent="submitOrder" class="checkout-form">
      <label>
        Meno a priezvisko *
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Email *
        <input v-model="form.email" type="email" required />
      </label>

      <label>
        Ulica a cislo *
        <input v-model="form.address" type="text" required />
      </label>

      <div class="row">
        <label>
          Mesto
          <input v-model="form.city" type="text" />
        </label>
        <label>
          PSC
          <input v-model="form.zip" type="text" />
        </label>
      </div>

      <button type="submit" class="submit-btn">Dokoncit objednavku</button>
    </form>

    <button class="back-btn" @click="$router.push('/cart')">Spat do kosika</button>
  </div>
</template>
