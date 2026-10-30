<script setup>
const caracteristicas = [
  { titulo: 'Recarga rápida', imagem: 'img/recarga-rapida.webp' },
  { titulo: 'Painel de instrumentos', imagem: 'img/painel.webp' },
  { titulo: 'Pontos de recarga', imagem: 'img/pontos-recarga.webp' },
  { titulo: 'Design premiado', imagem: 'img/design-premiado.webp' },
]
</script>

<template>
  <section class="mt-9 grid sm:grid-cols-2 lg:grid-cols-4">
    <article v-for="(item, index) in caracteristicas" :key="item.titulo">
      <div class="border-line px-6 pt-9 pb-11 lg:h-48" :class="{ 'lg:border-l': index > 0 }">
        <h3 class="text-[26px] uppercase leading-none">{{ item.titulo }}</h3>
        <p class="mt-4 font-grotesk leading-7 text-soft">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard.
        </p>
      </div>
      <img :src="item.imagem" :alt="item.titulo" class="h-68 w-full object-cover" />
    </article>
  </section>
</template>
