<template>
  <form @submit.prevent="saveTodo">
    <input type="text" v-model="newTodo.name">
    <p v-if="errors.name">{{ errors.name }}</p>

    <button :disabled="loading || !isValid || !dirty">
      Enregistrer
      <span v-if="loading">...</span>
    </button>
  </form>
</template>

<script setup>
  import axios from 'axios';
  import { computed, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const newTodo = ref({
    name: '',
    done: false,
  });
  const errors = ref({
    name: null,
  });
  const dirty = ref(false);
  const loading = ref(false);

  const isValid = computed(() => {
    return Object.values(errors.value).filter(v => v).length === 0;
  });

  // Validation des erreurs en "direct"
  watch(newTodo, () => {
    dirty.value = true;
    errors.value.name = null;

    if (newTodo.value.name.trim().length < 2) {
      errors.value.name = 'Le nom est trop court';
    }
  }, { deep: true });

  const saveTodo = () => {
    loading.value = true;

    axios.post('http://localhost:3000/todos', newTodo.value).then(response => {
      router.push('/');
    }).finally(() => loading.value = false);
  }
</script>
