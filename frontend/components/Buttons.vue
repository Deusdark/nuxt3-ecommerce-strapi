<template>
  <div class="">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div class="container flex flex-wrap mx-auto ml-4 mr-6 mt-8">
        <nuxt-link
          v-for="category in categories"
          :to="`/categories/${category.slug}`"
          :key="category.id"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-2 border border-gray-400 rounded shadow"
        >
          {{ category.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data, error } = await useAsyncData("categories", () =>
  fetch(`${config.STORE_URL}/categories`).then((response) => response.json())
);
const categories = data;
</script>
