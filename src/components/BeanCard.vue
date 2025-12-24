<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BeanCard',
  props: {
    bean: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <div class="card">
    <img :src="`/images/${bean.image}`" :alt="bean.name" />
    <div class="card_text">{{ bean.name }}</div>
  </div>
</template>
