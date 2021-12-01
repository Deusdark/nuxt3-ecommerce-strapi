<template>
  <Products :products="data.products" :error="error" />
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const { data, error } = await useAsyncData(`categories/${route.params.id}`, () =>
  $fetch(`${config.STORE_URL}/categories/${route.params.id}`)
);
</script>
