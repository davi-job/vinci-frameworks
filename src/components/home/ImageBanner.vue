<script setup>
defineProps({
  src: String,
  alt: String,
})
</script>

<template>
  <img :src="src" :alt="alt" class="h-72 w-full object-cover md:h-148" />
</template>
