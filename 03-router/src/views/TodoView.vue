<script setup>
  import axios from 'axios';
  import { onMounted, ref, watch } from 'vue';
  import { RouterLink, useRoute, useRouter } from 'vue-router';

  const todo = ref(null);
  const route = useRoute();
  const router = useRouter();

  watch(() => route.params.id, () => {
    axios.get(`http://localhost:3000/todos/${route.params.id}`).then(response => {
      todo.value = response.data;
    }).catch(error => {
      // Si la todo n'existe pas...
      router.push('/todo/1');
    });
  }, { immediate: true });
</script>

<template>
  <div v-if="todo">
    {{ todo.name }}

    <RouterLink :to="`/todo/${todo.id - 1}`" v-if="todo.id > 1">
      Todo précédente
    </RouterLink>

    <RouterLink :to="`/todo/${todo.id + 1}`">
      Todo suivante
    </RouterLink>
  </div>
</template>
