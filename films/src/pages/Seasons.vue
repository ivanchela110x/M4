<script setup>
import CardSeasons from '@/components/cardSeasons.vue';
import cardSeasons from '@/components/cardSeasons.vue';
</script>



<template>
    <section>
        <CardSeasons v-for="i in 5" :key="i"/>
    </section>
</template>