<script setup>
defineProps({
    size: {
        type: Number,
        required: true,
        default: 3
    }
})
</script>

<template>
    <div class="fixation-point" :style="{ '--size': size }">
        <img src="@/assets/digitdummy.svg">
    </div>
</template>

<style scoped>
.fixation-point {
    width: calc(var(--size) * 1%);
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fixation-point img {
    width: 100%;
}
</style>