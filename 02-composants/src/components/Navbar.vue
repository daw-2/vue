<script setup>
  import { ref } from 'vue';

  const props = defineProps(['color']);

  const active = ref('Accueil');
  const refColor = ref(props.color); // Si on a besoin de modifier la valeur de la props
</script>

<template>
  <nav :style="{ backgroundColor: color }">
    <a href="#" @click.prevent="active = 'Accueil'" :class="{ active: active === 'Accueil' }">Accueil</a>
    <a href="#" @click.prevent="active = 'Liste'" :class="{ active: active === 'Liste' }">Liste</a>
    <a href="#" @click.prevent="active = 'A propos'" :class="{ active: active === 'A propos' }">A propos</a>
  </nav>
</template>

<style scoped>
  .active {
    background-color: #00bd7e33;
  }
</style>
