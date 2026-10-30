<script setup>
import { ref } from "vue";

// x e y = posição do marcador sobre a foto do carro, em %
const itens = [
	{ letra: "A", nome: "Retrovisores inteligentes", x: 16.4, y: 32.1 },
	{ letra: "B", nome: "Rodas de liga leve", x: 11.6, y: 67.6 },
	{ letra: "C", nome: "Reconhecimento de digital", x: 31.1, y: 40.4 },
	{ letra: "D", nome: "Sensor de proximidade", x: 55.3, y: 36.6 },
	{ letra: "E", nome: "Antena 5G", x: 66.5, y: 14.9 },
	{ letra: "F", nome: "Design sofisticado", x: 64.8, y: 59.6 },
	{ letra: "G", nome: "Abertura automática", x: 79.2, y: 35.1 },
	{ letra: "H", nome: "Câmera de estacionamento", x: 93.9, y: 70.4 },
];

const ativo = ref(null);
const bolinha =
	"flex size-4.5 shrink-0 items-center justify-center rounded-full font-grotesk text-xs text-white";
</script>

<template>
	<section class="wrapper pt-13">
		<div class="flex flex-col justify-between gap-10 lg:flex-row">
			<div class="max-w-95">
				<h2 class="text-3xl leading-none md:text-[42px]">
					VINCI MODEL V2
				</h2>
				<p class="mt-5 font-grotesk leading-8 text-muted">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever.
				</p>
			</div>

			<ul
				class="grid h-fit gap-x-9 gap-y-2.5 sm:grid-flow-col sm:grid-rows-4"
			>
				<li
					v-for="item in itens"
					:key="item.letra"
					class="flex items-center gap-2.5 uppercase text-muted"
					@mouseenter="ativo = item.letra"
					@mouseleave="ativo = null"
				>
					<span
						:class="[
							bolinha,
							ativo === item.letra ? 'bg-vinci' : 'bg-ink',
						]"
						>{{ item.letra }}</span
					>
					{{ item.nome }}
				</li>
			</ul>
		</div>

		<div class="relative mx-auto max-w-268">
			<img
				src="/img/suv-branco.webp"
				alt="Detalhes do Vinci Model V2"
				class="w-full"
			/>
			<span
				v-for="item in itens"
				:key="item.letra"
				class="absolute -translate-1/2 bg-vinci transition-transform"
				:class="[bolinha, { 'scale-150': ativo === item.letra }]"
				:style="{ left: item.x + '%', top: item.y + '%' }"
				@mouseenter="ativo = item.letra"
				@mouseleave="ativo = null"
			>
				{{ item.letra }}
			</span>
		</div>
	</section>
</template>
