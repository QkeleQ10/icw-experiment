<script setup>
import { ref } from 'vue'
import seedrandom from 'seedrandom'
import PoissonDiskSampling from 'poisson-disk-sampling'

const props = defineProps({
    seed: {
        type: String,
        required: true,
        default: '!'
    },
    distance: {
        type: Number,
        required: true,
        default: 1.8
    },
    size: {
        type: Number,
        required: true,
        default: 3
    },
})

const reveal = false
const rng = new seedrandom(props.seed)

const coordinates = new PoissonDiskSampling({
    shape: [16, 9],
    minDistance: props.distance,
}, rng)
    .fill()

const stimuli = ref(coordinates.map(([x, y]) => ({ coordinates: { x: x / 16, y: y / 9 } })))
stimuli.value[Math.floor(rng() * stimuli.value.length)].target = true
</script>

<template>
    <div id="stimuli-container">
        <Stimulus v-for="stimulus in stimuli" :x="stimulus.coordinates.x" :y="stimulus.coordinates.y"
            :target="stimulus.target" :reveal="reveal" :size="size" />
    </div>
</template>

<style scoped>
#stimuli-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>