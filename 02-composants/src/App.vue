<script setup>
  import { ref } from 'vue';
  import Button from './components/Button.vue';
  import Card from './components/Card.vue';
  import Counter from './components/Counter.vue';
  import Footer from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';
  import Term from './components/Term.vue';
  import UserForm from './components/UserForm.vue';

  const title = ref('Mon Application');
  const changeTitle = (newTitle) => title.value = newTitle;
  const color = ref('#00bd7e33');
  const author = ref({
    name: 'Mota',
    firstname: 'Fiorella',
  });

  const total = ref(5);
  const terms = ref([
    { term: 'Terme 1', definition: 'Définition terme 1' },
    { term: 'Terme 2', definition: 'Définition terme 2' },
  ]);
  const showTermForm = ref(false);
  const newTerm = ref({
    term: '',
    definition: '',
  });

  const saveTerm = () => {
    // Pour éviter les soucis de références, on copie l'objet
    terms.value.push({ ...newTerm.value });
    newTerm.value = {
      term: '',
      definition: '',
    };
    showTermForm.value = false;
  };
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
  <Counter start="5" max="10" @increment="(event) => total += event" />

  <h2>Composant d'affichage I ({{ terms.length }} termes)</h2>
  <button @click="showTermForm = !showTermForm">Nouveau terme</button>

  <form v-if="showTermForm" @submit.prevent="saveTerm">
    <div>
      <label for="term">Terme:</label>
      <input type="text" id="term" v-model="newTerm.term">
    </div>

    <div>
      <label for="definition">Définition:</label>
      <input type="text" id="definition" v-model="newTerm.definition">
    </div>

    <button :disabled="!newTerm.term.trim() || !newTerm.definition.trim()">Ok</button>
  </form>

  <Term v-for="term in terms" :term="term" />

  <h2>Créer un composant réutilisable</h2>
  <Button color="blue">Cliquer</Button>
  <Button color="green">
    Cliquer
    <template #right>🤖</template>
  </Button>

  <Footer :title="title" @update-title="(event) => title = event" />
</template>

<style scoped></style>
