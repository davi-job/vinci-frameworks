<script setup>
import AppLink from '../AppLink.vue'

defineProps({
  modelo: Object,
})
</script>

<template>
  <article class="flex flex-col">
    <div class="flex flex-wrap justify-between gap-6">
      <h2 class="text-2xl uppercase leading-7 tracking-[0.4em]">Vinci<br />{{ modelo.nome }}</h2>

      <dl class="grid grid-cols-[auto_auto] gap-x-8 text-lg leading-6 tracking-widest">
        <template v-for="item in modelo.especificacoes" :key="item.nome">
          <dt>{{ item.nome }}:</dt>
          <dd class="text-soft">{{ item.valor }}</dd>
        </template>
      </dl>
    </div>

    <img
      :src="modelo.imagem"
      :alt="'Vinci ' + modelo.nome"
      class="mx-auto my-4 w-full max-w-132 flex-1 object-contain"
    />

    <div class="flex items-center justify-between gap-4 text-xl tracking-widest">
      <p class="text-muted">{{ modelo.descricao }}</p>
      <AppLink to="/carro" class="uppercase underline underline-offset-4 hover:text-vinci">Conheça</AppLink>
    </div>
  </article>
</template>
