<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import { useCounterStore } from './stores/counter';
import { useAuthStore } from './stores/auth';
import { ref } from 'vue';

const store = useCounterStore();
store.fetchTodos();

const auth = useAuthStore();
const firstname = ref(null);
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/todo/create">Créer une todo</RouterLink>
      <RouterLink to="/about">A propos</RouterLink>
      <RouterLink to="/hello/toto">Hello Toto</RouterLink>

      <span v-if="auth.isLogged">
        {{ auth.user.firstname }}
        <button @click="auth.logout">Logout</button>
      </span>

      <form v-else style="display: inline" @submit.prevent="auth.login(firstname)">
        <input type="text" v-model="firstname">
        <button>Login</button>
      </form>
    </nav>
    Store: {{ store.count }}
  </header>

  <RouterView />

  <Footer />
</template>
