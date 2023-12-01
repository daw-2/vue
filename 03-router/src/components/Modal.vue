<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['show']);

const open = ref(props.show);

watch(() => props.show, () => open.value = props.show);
</script>

<template>
  <div v-if="open" class="modal">
    <slot />
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid lightgray;
}
</style>
