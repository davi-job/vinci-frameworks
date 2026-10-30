<script setup>
import AppLink from "./AppLink.vue";

const botoes = [
	{ texto: "Modelos", to: "/#modelos", estilo: "bg-vinci text-white" },
	{ texto: "Test Drive", estilo: "border border-current" },
];
</script>

<template>
	<div class="flex flex-col gap-4 sm:flex-row">
		<AppLink
			v-for="botao in botoes"
			:key="botao.texto"
			:to="botao.to"
			class="flex h-13 items-center justify-center rounded text-xl font-medium uppercase transition-opacity hover:opacity-80 sm:w-68"
			:class="botao.estilo"
		>
			{{ botao.texto }}
		</AppLink>
	</div>
</template>
