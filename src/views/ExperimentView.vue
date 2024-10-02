<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/data.js'
import { useRouter } from 'vue-router'

const data = useDataStore()
const router = useRouter()

const state = ref('blank')
const observation = ref(data.observations[0])

function awaitInput() {
    return new Promise((resolve) => {
        window.addEventListener('mousedown', resolve, { once: true })
        window.addEventListener('touchstart', resolve, { once: true })
        window.addEventListener('keydown', resolve, { once: true })
    })
}

async function executeCycle(index) {
    observation.value = data.observations[index]
    state.value = 'fixation'
    await awaitInput()
    state.value = 'stimuli'
    const startTime = new Date()
    await awaitInput()
    state.value = 'blank'
    const endTime = new Date()
    const responseTime = endTime - startTime
    data.observations[index].responseTime = responseTime
    if (data.observations[index + 1]) setTimeout(() => {
        executeCycle(index + 1)
    }, 1000)
    else router.push('/result')
}
setTimeout(() => {
    executeCycle(0)
}, 1000)
</script>

<template>
    <main id="experiment-view">
        <FixationSlide v-if="state === 'fixation'" :size="observation.size" />
        <StimuliSlide v-else-if="state === 'stimuli'" :seed="observation.seed" :distance="observation.distance"
            :size="observation.size" />
        <div v-if="state === 'blank'"></div>
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
</style>
