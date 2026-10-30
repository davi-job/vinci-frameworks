<script setup>
import CarHero from '../components/carro/CarHero.vue'
import CarStats from '../components/carro/CarStats.vue'
import CarFeatures from '../components/carro/CarFeatures.vue'
import CarDetails from '../components/carro/CarDetails.vue'
import CarFaq from '../components/carro/CarFaq.vue'
</script>

<template>
  <CarHero />
  <CarStats />
  <div class="wrapper">
    <img src="/img/banner-carro.webp" alt="Vinci Model V2 na estrada" class="h-64 w-full rounded-xl object-cover md:h-130" />
  </div>
  <CarFeatures />
  <CarDetails />
  <CarFaq />
</template>
