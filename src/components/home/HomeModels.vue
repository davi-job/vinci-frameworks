<script setup>
import ModelCard from './ModelCard.vue'

const modelos = [
  {
    nome: 'Model V2',
    imagem: 'img/suv-branco.webp',
    descricao: 'A SUV mais robusta da categoria',
    especificacoes: [
      { nome: 'Potência', valor: '300 cavalos' },
      { nome: 'Autonomia', valor: '500km por carga' },
      { nome: 'Peso', valor: '1.500 kg' },
      { nome: 'Tecnologia', valor: 'GPS e Smartink' },
    ],
  },
  {
    nome: 'Model V1',
    imagem: 'img/hatch-vermelho.webp',
    descricao: 'A SUV mais robusta da categoria',
    especificacoes: [
      { nome: 'Potência', valor: '300 cavalos' },
      { nome: 'Autonomia', valor: '500km por carga' },
      { nome: 'Peso', valor: '1.500 kg' },
      { nome: 'Tecnologia', valor: 'GPS e Smartink' },
    ],
  },
]
</script>

<template>
  <section id="modelos" class="wrapper grid gap-16 pt-16 pb-18 md:grid-cols-2 md:gap-24">
    <ModelCard v-for="modelo in modelos" :key="modelo.nome" :modelo="modelo" />
  </section>
</template>
