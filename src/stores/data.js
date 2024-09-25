import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const name = ref('')

  const obj = {
    name,
    research: {
      author: "[NAAM ONDERZOEKER]",
      title: '[TITEL ONDERZOEK]',
    }
  }

  return obj
})
