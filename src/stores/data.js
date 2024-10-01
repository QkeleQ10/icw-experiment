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
        },
        observations: ref([
            { seed: '01', distance: 1.8, size: 3 },
            { seed: '02', distance: 2.1, size: 4 },
            { seed: '03', distance: 1.5, size: 2 },
            { seed: '04', distance: 1.9, size: 3 },
            { seed: '05', distance: 2.0, size: 4 },
            { seed: '06', distance: 1.7, size: 2 },
            { seed: '07', distance: 1.8, size: 3 },
            { seed: '08', distance: 1.9, size: 3 },
            { seed: '09', distance: 2.0, size: 4 },
            { seed: '10', distance: 1.6, size: 2 },
            { seed: '11', distance: 1.7, size: 2 },
            { seed: '12', distance: 1.8, size: 3 },
            { seed: '13', distance: 1.9, size: 3 },
            { seed: '14', distance: 2.0, size: 4 },
            { seed: '15', distance: 1.6, size: 2 },
            { seed: '16', distance: 1.7, size: 2 },
            { seed: '17', distance: 1.8, size: 3 },
            { seed: '18', distance: 1.9, size: 3 },
            { seed: '19', distance: 2.0, size: 4 },
            { seed: '20', distance: 1.6, size: 2 },
        ]),
    }

    return obj
})
