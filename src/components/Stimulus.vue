<script setup>
defineProps({
    x: {
        type: Number,
        required: true,
        default: 0
    },
    y: {
        type: Number,
        required: true,
        default: 0
    },
    target: {
        type: Boolean,
        required: false,
        default: false
    },
    reveal: {
        type: Boolean,
        required: false,
        default: false
    },
    size: {
        type: Number,
        required: false,
        default: 3
    },
})
</script>

<template>
    <div class="stimulus" :class="{ target, reveal }" :style="{ '--x': x, '--y': y, '--size': size }">
        <img v-if="target" src="@/assets/digit5.svg">
        <img v-else src="@/assets/digit2.svg">
    </div>
</template>

<style scoped>
.stimulus {
    position: absolute;
    width: calc(var(--size) * 1.5%);
    aspect-ratio: 1;
    left: calc(var(--x) * 100%);
    top: calc(var(--y) * 100%);
    translate: -50% -50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stimulus img {
    width: 100%;
}

.stimulus.reveal {
    background-color: #ffd1d1;
}

.stimulus.target.reveal {
    background-color: #9fff9f;
}
</style>