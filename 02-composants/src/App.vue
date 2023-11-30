<script setup>
  import { ref } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  const title = ref('Mon Application');
  const changeTitle = (newTitle) => title.value = newTitle;
  const color = ref('#00bd7e33');
</script>

<template>
  <header>
    <h1 @click="changeTitle('Ma superbe Application')">{{ title }}</h1>

    <Navbar :color="color" />
    <input type="color" v-model="color">
  </header>

  <Footer :title="title" @update-title="(event) => title = event" />
</template>

<style scoped></style>
