<script setup>
const numeros = [
  { valor: '520 km', legenda: 'com 1 carga' },
  { valor: '2.800 rpm', legenda: 'de torque' },
  { valor: '10 anos', legenda: 'garantia' },
]
</script>

<template>
  <section class="wrapper py-17 text-center">
    <h2 class="text-2xl font-light uppercase text-muted">Tecnologia aliada ao futuro</h2>
    <ul class="mt-6 flex flex-col items-center justify-center divide-line sm:flex-row sm:divide-x">
      <li v-for="item in numeros" :key="item.valor" class="px-14 py-2 text-left font-light uppercase">
        <p class="text-5xl leading-none md:text-7xl">{{ item.valor }}</p>
        <p class="mt-2 text-2xl">{{ item.legenda }}</p>
      </li>
    </ul>
  </section>
</template>
