<script setup>
import AppLink from '../AppLink.vue'

const acoes = ['Agende um test drive', 'Veja ofertas', 'Encontre uma loja']
</script>

<template>
  <section class="wrapper py-14">
    <ul class="space-y-3 md:space-y-1.5">
      <li v-for="acao in acoes" :key="acao">
        <AppLink
          class="flex items-center justify-between gap-6 text-3xl uppercase leading-none transition-colors hover:text-vinci md:text-7xl"
        >
          {{ acao }}
          <svg class="h-6 shrink-0 md:h-9" viewBox="0 0 23 35" fill="currentColor" aria-hidden="true">
            <path d="M23 17.5 5.32 0 0 5.26 12.37 17.5 0 29.74 5.32 35z" />
          </svg>
        </AppLink>
      </li>
    </ul>
  </section>
</template>
