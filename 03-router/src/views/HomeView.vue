<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const todos = ref([]);

  onMounted(() => {
    axios.get('http://localhost:3000/todos').then(response => {
      todos.value = response.data;
    });
  });
</script>

<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo.name }}
      {{ todo.done ? '✅' : '❌' }}
    </div>
  </div>
</template>
