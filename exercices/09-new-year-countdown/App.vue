<script setup>
import CountdownHeader from "./components/CountdownHeader.vue";
import CountdownSegment from "./components/CountdownSegment.vue";
</script>
<template>
  <div class="app-wrapper">
    <div class="countdown-box">
      <CountdownHeader />
      <main class="flex justify-center">
        <CountdownSegment data-test="days" label="days" />
        <CountdownSegment data-test="hours" label="hours" />
        <CountdownSegment data-test="minutes" label="minutes" />
        <CountdownSegment data-test="seconds" label="seconds" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-wrapper {
  @apply flex items-center justify-center w-full h-full p-10;
}
.countdown-box {
  @apply shadow-md relative bg-white p-5 rounded-lg border-gray-100 border-[1px];
}
body {
  @apply bg-gray-100;
}
</style>
