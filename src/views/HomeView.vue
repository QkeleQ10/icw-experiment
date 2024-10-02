<script setup>
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()
</script>

<template>
  <main>
    <RouterLink @click="data.participant.caffeinated = true" to="/consent">Met cafeïne</RouterLink>
    <RouterLink @click="data.participant.caffeinated = false" to="/consent">Zonder cafeïne</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
}
</style>
