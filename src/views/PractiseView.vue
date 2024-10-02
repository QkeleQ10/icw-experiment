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
    data.practiseObservations[index].responseTime = responseTime
    if (data.practiseObservations[index + 1]) setTimeout(() => {
        executeCycle(index + 1)
    }, 1000)
    else state.value = 'debrief'
}

async function startPractise() {
    state.value = 'blank'
    setTimeout(() => {
        executeCycle(0)
    }, 1000)
}
</script>

<template>
    <main id="practise-view">
        <div v-if="state === 'brief'">
            <p>
                De proef bestaat uit 20 zoekplaten.<br>
                <br>
                Wanneer je met een zoekplaat kunt beginnen, verschijnt er een dia met het symbool <img
                    src="@/assets/digitdummy.svg">.<br>
                Klik pas door wanneer je er klaar voor bent. Zodra je doorklikt, komt de zoekplaat in beeld en gaat de
                tijd in.<br>
                <br>
                In elke zoekplaat moet je het figuur <img src="@/assets/digit5.svg" alt="5"> zo snel
                mogelijk proberen te herkennen tussen de vele <img src="@/assets/digit2.svg" alt="2">'en.<br>
                Herken je het figuur? Klik dan <u>meteen</u> door. De tijd wordt automatisch bijgehouden.<br>
                Probeer niet door te klikken tot je <u>zeker weet</u> dat je het <u>juiste</u> figuur hebt gezien.<br>
                <br>
                Na het doorklikken verdwijnt de zoekplaat.<br>
                Iets later verschijnt het symbool <img src="@/assets/digitdummy.svg"> weer en kun je beginnen met de
                volgende zoekplaat. Klik door wanneer je wilt.<br>
                <br>
                In dit experiment kun je doorklikken met een toets op het toetsenbord, met een muisknop of met het touchscreen.<br>
                <br>
                Je krijgt eerst 5 oefeningen.
                Je kunt met de eerste oefening beginnen met onderstaande knop.<br>
                <br>
            </p>
            <a @click="startPractise">Oefening starten</a>
        </div>
        <FixationSlide v-if="state === 'fixation'" :size="observation.size" />
        <StimuliSlide v-else-if="state === 'stimuli'" :seed="observation.seed" :distance="observation.distance"
            :size="observation.size" />
        <div v-if="state === 'blank'"></div>
        <div v-else-if="state === 'debrief'">
            <p>
                Dat was de laatste oefening. Je bent nu klaar voor de echte proef.<br>
                Wederom, neem je tijd en vergeet niet af en toe een adempauze te nemen.<br>
                <br>
                Je kunt beginnen met onderstaande knop.<br>
                <br>
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
