<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CheckoutView',
  setup() {
    const cart = useCartStore()
    const router = useRouter()

    const form = ref({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    })

    const submitOrder = () => {
      if (!form.value.name || !form.value.email || !form.value.address) {
        alert('Vyplňte prosím povinné polia')
        return
      }

      alert(
        `Ďakujeme za objednávku!\n\nCelková suma: ${cart.totalPrice} €\nObjednávka bola odoslaná.`,
      )

      cart.clearCart()
      router.push('/')
    }

    return { form, cart, submitOrder }
  },
})
</script>

<template>
  <div class="checkout">
    <h1>Dokončenie objednávky</h1>

    <div class="order-summary">
      <h3>Súhrn objednávky</h3>
      <p><strong>Položiek:</strong> {{ cart.totalItems }}</p>
      <p><strong>Celková cena:</strong> {{ cart.totalPrice }} €</p>
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
        Ulica a číslo *
        <input v-model="form.address" type="text" required />
      </label>

      <div class="row">
        <label>
          Mesto
          <input v-model="form.city" type="text" />
        </label>
        <label>
          PSČ
          <input v-model="form.zip" type="text" />
        </label>
      </div>

      <button type="submit" class="submit-btn">Dokončiť objednávku</button>
    </form>

    <button class="back-btn" @click="$router.push('/cart')">Späť do košíka</button>
  </div>
</template>
