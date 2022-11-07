<script setup lang="ts">
import useGeolocation from "./hooks/vx-geolocation";

const { position, error } = useGeolocation({ enableHighAccuracy: true });
</script>

<template>
  <main>
    <div v-if="position?.coords">
      <p>lat: {{ position?.coords.latitude }}</p>
      <p>lang: {{ position?.coords.longitude }}</p>
    </div>
    <p v-if="error">error: {{ error?.message }}</p>
  </main>
</template>

<style scoped></style>
