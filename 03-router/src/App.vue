<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">A propos</RouterLink>
      <RouterLink to="/hello/toto">Hello Toto</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
