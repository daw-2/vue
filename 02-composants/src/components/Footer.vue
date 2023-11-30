<script setup>
  import { computed } from 'vue';

  defineProps({
    title: {
      type: String,
      required: false,
      default: 'App',
    },
  });
  const emit = defineEmits(['updateTitle']);

  const year = computed(() => new Date().getFullYear());
</script>

<template>
  <p @click="emit('updateTitle', 'Ma nouvelle application')">
    {{ title }}
    &copy; {{ year }}.
  </p>
</template>
