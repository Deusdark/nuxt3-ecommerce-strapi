<template>
  <Products :products="data" :error="error" :storeUrl="config.STORE_URL" />
</template>

<script setup>
const config = useRuntimeConfig();

const { data, error } = await useAsyncData("products", () =>
  fetch(`${config.STORE_URL}/products`).then((response) => response.json())
);
</script>
