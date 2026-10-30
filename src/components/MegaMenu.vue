<script setup>
import AppLink from './AppLink.vue'

const modelos = [
  { nome: 'Modelo V1', imagem: 'img/suv-branco-lateral.webp' },
  { nome: 'Modelo V2', imagem: 'img/hatch-vermelho-lateral.webp' },
  { nome: 'Modelo V3', imagem: 'img/suv-preto.webp' },
  { nome: 'Modelo V1', imagem: 'img/suv-verde.webp' },
  { nome: 'Modelo V1', imagem: 'img/suv-branco-lateral.webp' },
  { nome: 'Modelo V1', imagem: 'img/suv-branco-lateral.webp' },
]

const atalhos = ['Ofertas', 'Test Drive', 'Lojas', 'Serviços', 'SAC', 'Privacidade']
</script>

<template>
  <div class="absolute inset-x-0 top-full border-y border-line bg-white shadow-[0_7px_27px_-9px_rgb(0_0_0/0.13)]">
    <div class="wrapper flex py-8">
      <ul class="grid flex-1 grid-cols-3 gap-y-6 pb-10">
        <li v-for="(modelo, index) in modelos" :key="index" class="text-center">
          <img :src="modelo.imagem" :alt="modelo.nome" class="h-36 w-full object-contain" />
          <p class="mt-2 text-lg font-medium uppercase tracking-widest">{{ modelo.nome }}</p>
          <div class="flex justify-center gap-7">
            <AppLink to="/carro" class="hover:text-vinci">Ver mais</AppLink>
            <AppLink class="hover:text-vinci">Comprar</AppLink>
          </div>
        </li>
      </ul>

      <div class="ml-8 w-106 border-l border-line pl-5">
        <p class="max-w-69 border-b border-line pb-3 text-sm font-medium uppercase tracking-[0.4em] text-soft">
          Navegue
        </p>
        <ul class="mt-4 pl-7">
          <li v-for="atalho in atalhos" :key="atalho">
            <AppLink class="text-sm font-medium uppercase leading-10.5 tracking-[0.2em] hover:text-vinci">
              {{ atalho }}
            </AppLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
