// stores/cart.ts
import { defineStore } from 'pinia'
import type { CoffeeBean } from '@/types/coffee'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CoffeeBean[],
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((sum, item) => sum + (item.quantity ?? 0), 0)
    },
    totalPrice: (state) => {
      return state.items
        .reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0)
        .toFixed(2)
    },
  },

  actions: {
    init() {
      const saved = localStorage.getItem('cart')
      if (saved) {
        try {
          this.items = JSON.parse(saved)
        } catch (e) {
          console.warn(e)
        }
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    addItem(bean: CoffeeBean) {
      const existing = this.items.find((i) => i.slug === bean.slug)
      if (existing) {
        existing.quantity = (existing.quantity ?? 0) + 1
      } else {
        this.items.push({ ...bean, quantity: 1 })
      }
      this.saveToLocalStorage()
    },

    increaseQuantity(slug: string) {
      const item = this.items.find((i) => i.slug === slug)
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1
        this.saveToLocalStorage()
      }
    },

    decreaseQuantity(slug: string) {
      const item = this.items.find((i) => i.slug === slug)
      if (item) {
        if (item.quantity && item.quantity > 1) {
          item.quantity -= 1
        } else {
          this.removeItem(slug)
        }
        this.saveToLocalStorage()
      }
    },

    removeItem(slug: string) {
      this.items = this.items.filter((i) => i.slug !== slug)
      this.saveToLocalStorage()
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
  },
})
