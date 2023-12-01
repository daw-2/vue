<template>
  <h1>Bonjour {{ route.params.name }}</h1>

  <RouterLink to="/hello/titi">Titi</RouterLink>
  <input type="text" v-model="search">
  <button @click="router.push(`/hello/${search}`)">Go</button>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  const search = ref('');

  // onMounted(() => {
  //   console.log(`call api ${route.params.name}`);
  // });

  watch(
    () => route.params.name,
    () => {
      console.log(`call api ${route.params.name}`);
    },
    { immediate: true }
  );
</script>
