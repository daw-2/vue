<script setup>
  import axios from 'axios';
  import { onMounted, ref, watch } from 'vue';

  const photos = ref([]);
  const loading = ref(true);
  const page = ref(1);

  const fetchPhotos = async () => {
    loading.value = true;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page.value}`);

    setTimeout(() => {
      photos.value = [ ...photos.value, ...response.data ]; // On fusionne le tableau
      loading.value = false;
      page.value++; // Le prochain chargement ira sur la page suivante...
    }, 500);
  }

  onMounted(fetchPhotos);

  // On peut watch si le click fait juste un page++
  // watch(page, fetchPhotos)
</script>

<template>
  <div v-if="!loading || photos.length > 0" class="grid">
    <img v-for="photo in photos" :src="photo.url" :alt="photo.title" width="100">
  </div>

  <p v-if="loading">On attend les photos...</p>
  <button @click="fetchPhotos" v-if="photos.length < 50" :disabled="loading">Le reste ?</button>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 1180px;
  gap: 20px;
}
</style>
