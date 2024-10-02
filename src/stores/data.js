import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
    const obj = {
        participant: {
            firstname: ref(''),
            lastname: ref(''),
            consented: ref(false),
            caffeinated: ref(false)
        },
        research: {
            author: "Q.R. Althues, M.S.R. van den Berg, J.L. Wright, J.M. de Vaal",
            title: 'Het effect van cafeïne op het zoekvermogen',
            mail: 'q.r.althues@students.uu.nl'
        },
        practiseObservations: ref([
            { seed: 'practise01', distance: 3.5, size: 6.0 },
            { seed: 'practise02', distance: 3.0, size: 5.0 },
            { seed: 'practise03', distance: 2.2, size: 4.5 },
            { seed: 'practise04', distance: 1.9, size: 3.5 },
            { seed: 'practise05', distance: 1.7, size: 3.0 },
        ]),
        observations: ref([
            { seed: 'obs01', distance: 3.0, size: 5.5 },
            { seed: 'obs02', distance: 2.5, size: 5.2 },
            { seed: 'obs03', distance: 2.0, size: 4.5 },
            { seed: 'obs04', distance: 2.0, size: 4.6 },
            { seed: 'obs05', distance: 1.9, size: 3.5 },
            { seed: 'obs06', distance: 1.8, size: 3.3 },
            { seed: 'obs07', distance: 1.7, size: 2.5 },
            { seed: 'obs08', distance: 1.9, size: 3.1 },
            { seed: 'obs09', distance: 1.8, size: 3.3 },
            { seed: 'obs10', distance: 1.9, size: 3.0 },
            { seed: 'obs11', distance: 2.0, size: 4.0 },
            { seed: 'obs12', distance: 1.7, size: 2.5 },
            { seed: 'obs13', distance: 1.9, size: 3.4 },
            { seed: 'obs14', distance: 1.8, size: 3.2 },
            { seed: 'obs15', distance: 1.6, size: 2.1 },
            { seed: 'obs16', distance: 1.7, size: 2.6 },
            { seed: 'obs17', distance: 1.8, size: 3.0 },
            { seed: 'obs18', distance: 1.6, size: 2.5 },
            { seed: 'obs19', distance: 1.6, size: 2.4 },
            { seed: 'obs20', distance: 1.5, size: 2.2 },
        ]),
    }

    return obj
})
