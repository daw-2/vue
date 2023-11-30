<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
import UserForm from './components/UserForm.vue';

  const title = ref('Mon Application');
  const changeTitle = (newTitle) => title.value = newTitle;
  const color = ref('#00bd7e33');
  const author = ref({
    name: 'Mota',
    firstname: 'Fiorella',
  });
</script>

<template>
  <header>
    <h1 @click="changeTitle('Ma superbe Application')">{{ title }}</h1>

    <Navbar :color="color" />
    <input type="color" v-model="color">
  </header>

  {{ author }}
  <UserForm v-model="author" />

  <Footer :title="title" @update-title="(event) => title = event" />
</template>

<style scoped></style>
