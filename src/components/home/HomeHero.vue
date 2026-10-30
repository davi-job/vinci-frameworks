<script setup>
import HeroButtons from '../HeroButtons.vue'
</script>

<template>
  <section class="relative h-160 text-white">
    <img src="/img/hero-home.webp" alt="Vinci Model V3 carregando" class="absolute inset-0 size-full object-cover object-bottom" />
    <div
      class="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black/70 to-black/30 md:w-[78%] md:from-black/50 md:to-transparent"
    ></div>

    <div class="wrapper relative flex h-full flex-col justify-end pb-18">
      <h1 class="text-5xl leading-none md:text-7xl">VINCI MODEL V3</h1>
      <p class="mt-3 max-w-176 font-grotesk text-lg leading-9 md:text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever.
      </p>
      <HeroButtons class="mt-11" />
    </div>
  </section>
</template>
