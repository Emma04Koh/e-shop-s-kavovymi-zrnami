import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import type { CoffeeBean } from '@/types/coffee'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CoffeeBean[]>([])

  const saved = localStorage.getItem('cart')
  if (saved) {
    try {
      items.value = JSON.parse(saved)
    } catch (e) {
      console.warn(e)
    }
  }

  watch(
    items,
    (newItems) => {
      localStorage.setItem('cart', JSON.stringify(newItems))
    },
    { deep: true },
  )

  function addItem(bean: CoffeeBean) {
    const existing = items.value.find((i: CoffeeBean) => i.slug === bean.slug)
    if (existing) {
      existing.quantity! += 1
    } else {
      items.value.push({ ...bean, quantity: 1 })
    }
  }

  function increaseQuantity(slug: string) {
    const item = items.value.find((i: CoffeeBean) => i.slug === slug)
    if (item) item.quantity! += 1
  }

  function decreaseQuantity(slug: string) {
    const item = items.value.find((i: CoffeeBean) => i.slug === slug)
    if (item) {
      if (item.quantity! > 1) {
        item.quantity! -= 1
      } else {
        removeItem(slug)
      }
    }
  }

  function removeItem(slug: string) {
    items.value = items.value.filter((i: CoffeeBean) => i.slug !== slug)
  }

  function clearCart() {
    items.value = []
  }

  const totalItems = computed(() => {
    return items.value.reduce((sum, item: CoffeeBean) => sum + (item.quantity ?? 0), 0)
  })

  const totalPrice = computed(() => {
    return items.value
      .reduce((sum, item: CoffeeBean) => sum + item.price * (item.quantity ?? 0), 0)
      .toFixed(2)
  })

  return {
    items,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  }
})
