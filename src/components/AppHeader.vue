<script setup>
import { ref } from "vue";
import AppLink from "./AppLink.vue";
import VinciLogo from "./VinciLogo.vue";
import MegaMenu from "./MegaMenu.vue";

const links = [
	{ texto: "Home", to: "/" },
	{ texto: "Sobre" },
	{ texto: "Veículos", to: "/carro", mega: true },
	{ texto: "Serviços" },
	{ texto: "Test Drive" },
];

const menuAberto = ref(false);
const megaAberto = ref(false);
</script>

<template>
	<header class="relative z-40 bg-white" @mouseleave="megaAberto = false">
		<div class="wrapper flex h-20 items-center justify-between">
			<RouterLink to="/">
				<VinciLogo />
			</RouterLink>

			<nav class="hidden h-full gap-12 lg:flex xl:gap-24">
				<AppLink
					v-for="link in links"
					:key="link.texto"
					:to="link.to"
					class="flex items-center border-b-2 uppercase transition-colors hover:border-ink"
					:class="
						link.mega && megaAberto
							? 'border-ink'
							: 'border-transparent'
					"
					@mouseenter="megaAberto = link.mega"
					@click="megaAberto = false"
				>
					{{ link.texto }}
				</AppLink>
			</nav>

			<button
				type="button"
				class="lg:hidden"
				aria-label="Abrir menu"
				@click="menuAberto = !menuAberto"
			>
				<svg
					class="size-8"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<path v-if="menuAberto" d="M6 6l12 12M18 6L6 18" />
					<path v-else d="M3 6h18M3 12h18M3 18h18" />
				</svg>
			</button>
		</div>

		<!-- Menu do Celular -->
		<nav
			v-if="menuAberto"
			class="wrapper flex flex-col border-t border-line py-2 lg:hidden"
			@click="menuAberto = false"
		>
			<AppLink
				v-for="link in links"
				:key="link.texto"
				:to="link.to"
				class="py-3 uppercase"
			>
				{{ link.texto }}
			</AppLink>
		</nav>

		<MegaMenu v-if="megaAberto" @click="megaAberto = false" />
	</header>
</template>
