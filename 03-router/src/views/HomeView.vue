<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const todos = ref([]);

  onMounted(() => {
    axios.get('http://localhost:3000/todos').then(response => {
      todos.value = response.data;
    });
  });

  const toggleTodo = (todo) => {
    // 2ème paramètre = on repasse l'objet à mettre à jour dans la bdd
    axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
  }
</script>

<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <RouterLink :to="`/todo/${todo.id}`">
        {{ todo.name }}
      </RouterLink>
      {{ todo.done ? '✅' : '❌' }}
      <input type="checkbox" v-model="todo.done" @change="toggleTodo(todo)">
    </div>
  </div>
</template>
