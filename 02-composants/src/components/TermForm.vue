<script setup>
  import { ref } from 'vue';

  const emit = defineEmits(['added:term']);

  const showTermForm = ref(false);
  const newTerm = ref({
    term: '',
    definition: '',
  });

  const saveTerm = () => {
    // Pour éviter les soucis de références, on copie l'objet
    // terms.value.push({ ...newTerm.value });
    emit('added:term', { ...newTerm.value });
    newTerm.value = {
      term: '',
      definition: '',
    };
    showTermForm.value = false;
  };
</script>

<template>
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
</template>
