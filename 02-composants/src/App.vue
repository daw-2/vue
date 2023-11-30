<script setup>
  import { ref } from 'vue';
  import Card from './components/Card.vue';
  import Counter from './components/Counter.vue';
  import Footer from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';
  import UserForm from './components/UserForm.vue';

  const title = ref('Mon Application');
  const changeTitle = (newTitle) => title.value = newTitle;
  const color = ref('#00bd7e33');
  const author = ref({
    name: 'Mota',
    firstname: 'Fiorella',
  });

  const total = ref(5);
</script>

<template>
  <header>
    <h1 @click="changeTitle('Ma superbe Application')">{{ title }}</h1>

    <Navbar :color="color" />
    <input type="color" v-model="color">
  </header>

  {{ author }}
  <UserForm v-model="author" />

  <Card>Valider</Card>
  <Card image="https://i.pravatar.cc/50">
    <h1>{{ author.firstname }} {{ author.name }}</h1>

    <template #before>Icône</template>
  </Card>

  <h2>Composant counter (total: {{ total }})</h2>
  <Counter @increment="(event) => total += event" />
  <Counter :start="5" :max="10" @increment="(event) => total += event" />

  <Footer :title="title" @update-title="(event) => title = event" />
</template>

<style scoped></style>
