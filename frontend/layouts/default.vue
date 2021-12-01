<template>
  <Html lang="fr-FR">
    <Head>
      <Title>Buy stickers with Strapi, Nuxt.js and Snipcart</Title>
    </Head>
    <Body>
      <div class="flex justify-center bg-gray-200">
        <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
          <Navbar />
          <Buttons />
          <div class="flex-grow">
            <slot />
          </div>
          <Footer />
        </div>
        <div
          hidden
          id="snipcart"
          data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
        ></div>
      </div>
    </Body>
  </Html>
</template>

<script setup>
const meta = useMeta({
  meta: [
    {
      name: "description",
      content: "e-commerce starter using Strapi, Nuxt.js and Snipcart",
    },
  ],
});
</script>
