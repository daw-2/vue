<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import Modal from '../components/Modal.vue';

  const todos = ref([]);
  const todoBeDeleted = ref(null);

  onMounted(() => {
    axios.get('http://localhost:3000/todos').then(response => {
      todos.value = response.data;
    });
  });

  const toggleTodo = (todo) => {
    // 2ème paramètre = on repasse l'objet à mettre à jour dans la bdd
    axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  const deleteTodo = () => {
    axios.delete(`http://localhost:3000/todos/${todoBeDeleted.value.id}`)
      .then(response => {
        todos.value = todos.value.filter(t => t.id !== todoBeDeleted.value.id);
        todoBeDeleted.value = null;
      });
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
      <button @click="todoBeDeleted = todo">Supprimer</button>
    </div>

    <Modal :show="todoBeDeleted">
      <p>Supprimer {{ todoBeDeleted.id }}</p>
      <button @click="deleteTodo">Confirmer</button>
      <button @click="todoBeDeleted = null">Fermer</button>
    </Modal>
  </div>
</template>
