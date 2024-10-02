<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()

const state = ref('brief')
const observation = ref(data.practiseObservations[0])

function awaitInput() {
    return new Promise((resolve) => {
        window.addEventListener('mousedown', resolve, { once: true })
        window.addEventListener('touchstart', resolve, { once: true })
        window.addEventListener('keydown', resolve, { once: true })
    })
}

async function executeCycle(index) {
    observation.value = data.practiseObservations[index]
    state.value = 'fixation'
    await awaitInput()
    state.value = 'stimuli'
    const startTime = new Date()
    await awaitInput()
    state.value = 'blank'
    const endTime = new Date()
    const responseTime = endTime - startTime
    data.observations[index].responseTime = responseTime
    if (data.practiseObservations[index + 1]) setTimeout(() => {
        executeCycle(index + 1)
    }, 1000)
    else state.value = 'debrief'
}
</script>

<template>
    <main id="practise-view">
        <div v-if="state === 'brief'">
            <p>
                Je begint met 5 oefeningen. Deze tellen niet mee voor het uiteindelijke resultaat.<br>
                <br>
                Op de volgende dia verschijnt er een <img src="@/assets/digitdummy.svg">. Dit kruisje betekent dat je
                kan beginnen met de volgende zoekplaat.<br>
                Het formaat van het kruisje is een indicatie voor de grootte en moeilijkheidsgraad van de zoekplaat.<br>
                Neem zo veel tijd als je nodig hebt. De tijd wordt niet bijgehouden zo lang het kruisje in beeld is.<br>
                <br>
                Na het doorklikken krijg je de zoekplaat te zien. De timer begint te lopen. Het is de bedoeling dat je
                het
                figuur <img src="@/assets/digit5.svg"> zo snel mogelijk herkent tussen de vele <img
                    src="@/assets/digit2.svg">'en.<br>
                Herken je het figuur? Klik dan meteen door. De timer stopt en het scherm wordt leeg. Neem even
                pauze.<br>
                Wanneer het kruisje weer verschijnt, kun je doorgaan naar de volgende zoekplaat wanneer je wilt.<br>
                <br>
                Je kunt nu met de eerste oefening beginnen.<br>
            </p>
            <a @click="executeCycle(0)">Oefening starten</a>
        </div>
        <FixationSlide v-if="state === 'fixation'" :size="observation.size" />
        <StimuliSlide v-else-if="state === 'stimuli'" :seed="observation.seed" :distance="observation.distance"
            :size="observation.size" />
        <div v-if="state === 'blank'"></div>
        <div v-else-if="state === 'debrief'">
            <p>
                Dat was de laatste oefening. Je bent nu klaar voor de echte proef.<br>
                <br>
                De proef bestaat uit 20 zoekplaten.<br>
                <br>
                <b>Let op:</b> Als je doorklikt, begint de proef echt. Je kunt niet meer terug.<br>
            </p>
            <RouterLink to="/experiment">Proef starten</RouterLink>
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: 100%;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

a {
    cursor: pointer;
}
</style>
