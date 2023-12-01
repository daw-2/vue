<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import { useCounterStore } from './stores/counter';

const store = useCounterStore();
store.fetchTodos();
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/todo/create">Créer une todo</RouterLink>
      <RouterLink to="/about">A propos</RouterLink>
      <RouterLink to="/hello/toto">Hello Toto</RouterLink>
    </nav>
    Store: {{ store.count }}
  </header>

  <RouterView />

  <Footer />
</template>
