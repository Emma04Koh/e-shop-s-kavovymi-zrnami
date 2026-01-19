<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<template>
  <footer id="footer">
    <div class="footer-content">
      <nav class="footer-links">
        <RouterLink to="/">Domov</RouterLink>
        <RouterLink to="/cart">Košík</RouterLink>
      </nav>

      <div>Kávové zrná k Vaším službám</div>
    </div>
  </footer>
</template>
