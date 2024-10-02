<script setup>
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()
</script>

<template>
    <main v-if="!data.participant.consented" class="large">
        Kies proef:
        <RouterLink @click="data.participant.caffeinated = true" to="/consent">Met cafeïne</RouterLink>
        <RouterLink @click="data.participant.caffeinated = false" to="/consent">Zonder cafeïne</RouterLink>
    </main>
    <main v-else>
        <p>
            Het experiment is al uitgevoerd.<br>
            <br>
            <small>
                <b>Examinator</b>: De gegevens zijn niet gewist sinds <i>{{ data.participant.firstname }} {{ data.participant.lastname }}</i> het experiment heeft uitgevoerd.<br>
                Vernieuw de pagina of <RouterLink to="/result" style="padding: 0;">download het resultaat</RouterLink>.
            </small>
        </p>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.large {
    font-size: 2rem;
}
</style>
