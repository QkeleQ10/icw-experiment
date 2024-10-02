<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()

function downloadFile() {
    if (!data.participant.consented) return alert("Toestemmingsformulier niet ingevuld!")
    var a = document.createElement("a")
    var file = new Blob([JSON.stringify({ participant: data.participant, observations: data.observations, practiseObservations: data.practiseObservations })], { type: 'application/json' })
    a.href = URL.createObjectURL(file)
    a.download = `Resultaten_${new Date().toISOString()}.json`
    a.click()
}
downloadFile()
</script>

<template>
    <main>
        <p>
            Je hebt de proef afgerond. Bedankt voor je deelname!<br>
            <br>
            <small><b>Examinator</b>: Verstuur het <a @click="downloadFile">gedownloade bestand</a> direct in de groep
                en ga pas verder als het bestand zeker verstuurd is.<br>Klik <RouterLink to="/"
                    @click="window.location.reload(true)">hier</RouterLink>
                en <b>herlaad de pagina</b> om de gegevens te wissen en de volgende proef te starten.</small>
        </p>
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
    padding: 0;
}
</style>
