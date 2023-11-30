<script setup>
  import { ref } from 'vue';

  const props = defineProps(['start', 'max']);
  const emit = defineEmits(['increment']);

  const count = ref(props.start || 0);
  const decrement = () => {
    count.value--;
    emit('increment', -1);
  };
  const increment = () => {
    count.value++;
    emit('increment', 1);
  };
</script>

<template>
  <div :style="{ backgroundColor: count >= max ? 'red' : null }">
    <button @click="decrement" v-if="count > 0">-</button>
    <span>{{ count }}</span>
    <button @click="increment" v-if="!max || count < max">+</button>
  </div>
</template>
