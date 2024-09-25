<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()

const canProceed = computed(() => {
    return data.participant.consented && data.participant.firstname && data.participant.lastname
})
</script>

<template>
    <p>
        {{ data.research.author }}<br>
        <br>
        Universiteit Utrecht<br>
        Opleiding Kunstmatige Intelligentie<br>
        e-mail: jouw.email@uu.nl<br>
        <br>
        <br>
        Onderzoek: {{ data.research.title }}<br>
        <br>
        Ondergetekende, <input v-model="data.participant.firstname" placeholder="voornaam"> <input
            v-model="data.participant.lastname" placeholder="achternaam">, verklaart uit vrije wil deel te
        nemen aan het onderzoek “{{ data.research.title }}”, Uitgaande van het vak “Inleiding tot de Cognitiewetenschap”
        aan de
        Universiteit Utrecht.<br><br>
        “Ik ga ermee akkoord dat de resultaten van dit onderzoek gebruikt zullen worden voor wetenschappelijke
        doeleinden en mogen gepubliceerd worden. Mijn naam wordt daarbij niet gepubliceerd en de vertrouwelijkheid van
        de gegevens is in elk stadium van het onderzoek gewaarborgd. Ik behoud het recht om op elk moment mijn deelname
        aan het onderzoek stop te zetten.”<br>
        <br>
        <br>
        Datum: {{ new Date().toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}<br>
        <br>
        <br>
        Naam en handtekening van de proefpersoon:<br>
        <br>
        {{ data.participant.firstname }} {{ data.participant.lastname }}<br>
        <label for="consent-box"><input id="consent-box" type="checkbox" v-model="data.participant.consented"> Ik ga
            akkoord</label><br>
        <br>
        <br>
        Naam en handtekening van de onderzoeker:<br>
        <br>
        {{ data.research.author }}<br>
        <br>
        <br>
        <RouterLink to="/experiment" v-show="canProceed">Beginnen</RouterLink>
    </p>
</template>

<style></style>
