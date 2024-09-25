import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const obj = {
    participant: {
      firstname: ref(''),
      lastname: ref(''),
      consented: ref(false)
    },
    research: {
      author: "[NAAM ONDERZOEKER]",
      title: 'Het effect van cafeïne op het zoekvermogen',
    }
  }

  return obj
})
