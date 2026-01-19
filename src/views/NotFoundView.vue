<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundView',
})
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Stránka nebola nájdená</h2>
    <p>Ospravedlňujeme sa, ale stránka, ktorú hľadáte, tu nie je.</p>
    <button @click="$router.push('/')">Späť na úvodnú stránku</button>
  </div>
</template>
