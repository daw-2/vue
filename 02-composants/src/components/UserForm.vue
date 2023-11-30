<script setup>
  defineProps(['modelValue']);
  defineEmits(['update:modelValue']);
</script>

<template>
  <input type="text"
    :value="modelValue.name"
    @input="$emit('update:modelValue', { ...modelValue, name: $event.target.value })"
  >
  <input type="text"
    :value="modelValue.firstname"
    @input="$emit('update:modelValue', { ...modelValue, firstname: $event.target.value })"
  >
</template>
