<template>
  <Products :products="data" :error="error" :storeUrl="config.STORE_URL" />
</template>

<script setup>
const config = useRuntimeConfig();

const { data, error } = await useAsyncData("products", () =>
  $fetch(`${config.STORE_URL}/products`)
);

const { $consola } = useNuxtApp();

if ($consola) {
  $consola("Setup index.vue");
}
</script>
