<script setup>
import { ref } from "vue";

const lorem =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

const perguntas = [
	{
		pergunta:
			"Qual é a autonomia real da bateria em diferentes condições de condução?",
		resposta: lorem,
	},
	{
		pergunta:
			"Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?",
		resposta: lorem,
	},
	{
		pergunta:
			"Como funciona a infraestrutura de recarga para viagens de longa distância?",
		resposta: lorem,
	},
	{
		pergunta:
			"Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?",
		resposta: lorem,
	},
	{
		pergunta:
			"Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?",
		resposta: lorem,
	},
];

const aberta = ref(null);

function alternar(index) {
	aberta.value = aberta.value === index ? null : index;
}
</script>

<template>
	<section class="wrapper border-b border-line pt-8 pb-18">
		<h2 class="text-center text-3xl md:text-[42px]">FAQ</h2>
		<p
			class="mt-3 text-center text-[22px] uppercase tracking-widest text-soft"
		>
			Perguntas frequentes
		</p>

		<ul class="mx-auto mt-4 max-w-266">
			<li v-for="(item, index) in perguntas" :key="item.pergunta">
				<button
					type="button"
					class="flex w-full cursor-pointer items-center justify-between gap-6 py-6.5 text-left text-lg uppercase leading-8 md:text-[26px]"
					@click="alternar(index)"
				>
					{{ item.pergunta }}
					<svg
						class="w-6 shrink-0 transition-transform"
						:class="{ 'rotate-180': aberta === index }"
						viewBox="0 0 24 12"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M.75.75 12 11.25 23.25.75" />
					</svg>
				</button>
				<p
					v-if="aberta === index"
					class="pb-6 font-grotesk leading-7 text-muted"
				>
					{{ item.resposta }}
				</p>
			</li>
		</ul>
	</section>
</template>
