<script setup>
  defineProps(['image']);
</script>

<template>
  <div class="card">
    <div class="before">
      <slot name="before" />
    </div>
    <img :src="image">
    <slot />
  </div>
</template>

<style scoped>
.card {
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 10px;
  margin: 20px 0;
}

.before {
  background-color: lightgray;
}
</style>
