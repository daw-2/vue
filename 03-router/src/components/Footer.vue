<script setup>
  import { useCounterStore } from '../stores/counter';

  const store = useCounterStore();
</script>

<template>
  <p>
    Tous droits réservés.
    {{ store.count }}
    <button @click="store.increment(1)">Augmenter</button>
  </p>
</template>
