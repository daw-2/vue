<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const users = ref([]);
  const loading = ref(true);
  const error = ref(false);

  onMounted(() => { // Quand le DOM du composant est prêt
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      users.value = response.data;
    }).catch(e => {
      error.value = true;
    }).finally(() => {
      setTimeout(() => loading.value = false, 500);
    });
  });
</script>

<template>
  <p v-if="error">Désolé, l'API n'est pas disponible...</p>

  <ul v-if="!loading">
    <li v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>

  <span v-else class="loader">
    ↺
  </span>
</template>

<style scoped>
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .loader {
    animation: rotate 2s infinite;
    display: inline-block;
  }
</style>
