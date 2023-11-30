<script setup>
  defineProps(['term']);
</script>

<template>
  <p><strong>{{ term.term }} :</strong> {{ term.definition }}</p>
</template>
