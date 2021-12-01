<template>
  {{ hello }}
  <Products :products="products" :error="error" :storeUrl="config.STORE_URL" />
</template>

<script setup>
const config = useRuntimeConfig();

const [{ data: products, error }, { data: hello }] = await Promise.all([
  useFetch(`${config.STORE_URL}/products`),
  useFetch("/api/hello"),
]);

const { $consola } = useNuxtApp();
if ($consola) {
  $consola("Setup index.vue");
}
</script>
