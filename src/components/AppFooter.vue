<script setup>
import AppLink from "./AppLink.vue";
import VinciLogo from "./VinciLogo.vue";

const colunas = [
	{
		titulo: "Sobre",
		links: [
			"A Marca",
			"História",
			"Qualidade",
			"Onde estamos",
			"Investidores",
		],
	},
	{ titulo: "Contato", links: ["Fale Conosco", "Atendimento", "SAC"] },
	{ titulo: "SAC", links: ["Canais Oficiais", "Redes Sociais", "Suporte"] },
];
</script>

<template>
	<footer class="wrapper pt-14 pb-16">
		<div
			class="flex flex-col items-start gap-12 lg:flex-row lg:justify-between"
		>
			<VinciLogo />

			<div class="grid gap-10 sm:grid-cols-3 sm:gap-24">
				<div v-for="coluna in colunas" :key="coluna.titulo">
					<h3 class="text-2xl uppercase tracking-[0.2em] text-black">
						{{ coluna.titulo }}
					</h3>
					<ul class="mt-5">
						<li v-for="link in coluna.links" :key="link">
							<AppLink
								class="text-xl leading-10.5 tracking-[0.2em] text-muted hover:text-vinci"
								>{{ link }}</AppLink
							>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<p class="mt-5 uppercase leading-6 tracking-[0.4em] text-muted">
			©Copyright 2026.<br />
			Todos os Direitos Reservados.
		</p>
	</footer>
</template>
