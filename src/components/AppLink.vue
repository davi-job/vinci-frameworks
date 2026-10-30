<script setup>
defineProps({
	to: String,
});
</script>

<template>
	<RouterLink v-if="to" :to="to"><slot /></RouterLink>
	<a v-else href="#" @click.prevent><slot /></a>
</template>
