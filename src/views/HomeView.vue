<script setup>
import HomeHero from '../components/home/HomeHero.vue'
import HomeModels from '../components/home/HomeModels.vue'
import ImageBanner from '../components/home/ImageBanner.vue'
import ActionLinks from '../components/home/ActionLinks.vue'
</script>

<template>
  <HomeHero />
  <HomeModels />
  <ImageBanner src="img/paisagem-1.webp" alt="Vinci na estrada entre árvores" />
  <ActionLinks />
  <ImageBanner src="img/paisagem-2.webp" alt="Vinci na rodovia" class="object-[center_75%]" />
</template>
