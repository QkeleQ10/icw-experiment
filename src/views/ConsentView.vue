<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data.js'

const data = useDataStore()

const canProceed = computed(() => {
    return data.participant.consented && data.participant.firstname && data.participant.lastname
})
</script>

<template>
    <main>
        <p>
            {{ data.research.author }}<br>
            <br>
            Universiteit Utrecht<br>
            Opleiding Kunstmatige Intelligentie<br>
            E-mail: {{ data.research.mail }}<br>
            <br>
            <br>
            Onderzoek: {{ data.research.title }}<br>
            <br>
            Ondergetekende, <input v-model="data.participant.firstname" placeholder="voornaam"> <input
                v-model="data.participant.lastname" placeholder="achternaam">, verklaart uit vrije wil deel te
            nemen aan het onderzoek “{{ data.research.title }}”, Uitgaande van het vak “Inleiding tot de
            Cognitiewetenschap”
            aan de
            Universiteit Utrecht.<br><br>
            “Ik ga ermee akkoord dat de resultaten van dit onderzoek gebruikt zullen worden voor wetenschappelijke
            doeleinden en mogen gepubliceerd worden. Mijn naam wordt daarbij niet gepubliceerd en de vertrouwelijkheid
            van
            de gegevens is in elk stadium van het onderzoek gewaarborgd. Ik behoud het recht om op elk moment mijn
            deelname
            aan het onderzoek stop te zetten.”<br>
        </p>
        <p v-if="data.participant.firstname && data.participant.lastname">
            <br>
            <b>Datum:</b> {{ new Date().toLocaleDateString('nl-NL', {
                day: '2-digit', month: '2-digit', year: 'numeric'
            })
            }}<br>
            <br>
            <b>Naam en handtekening van de proefpersoon:</b><br>
            {{ data.participant.firstname }} {{ data.participant.lastname }}<br>
            <label for="consent-box"><input id="consent-box" type="checkbox" v-model="data.participant.consented"> Ik ga
                akkoord</label><br>
            <br>
            <b>Naam en handtekening van de onderzoeker:</b><br>
            {{ data.research.author }}<br>
            <label for="consent-box"><input id="consent-box" type="checkbox" :checked="true" disabled></label><br>
        </p>
        <RouterLink to="/practise" v-show="canProceed">Volgende</RouterLink>
    </main>
</template>

<style scoped>
main {
    padding: 1rem 2rem;
}
</style>
