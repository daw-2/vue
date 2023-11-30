<script setup>
  import { ref } from 'vue';

  defineProps(['color']);
  
  const shown = ref(false);
  const showEmoji = () => {
    shown.value = true;
    setTimeout(() => shown.value = false, 5000);
  };
</script>

<template>
  <button :class="color" @click="showEmoji">
    <slot />

    <span v-if="shown">
      <slot name="right" />
    </span>
  </button>
</template>

<style scoped>
button {
  border: 0;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
}

button:hover {
  opacity: 0.8;
}

.blue {
  background-color: blue;
  color: #fff;
}

.green {
  background-color: green;
  color: #fff;
}
</style>
