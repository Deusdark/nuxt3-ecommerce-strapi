<template>
  <Html lang="fr-FR">
    <Head>
      <Title>Buy stickers with Strapi, Nuxt.js and Snipcart</Title>
      <Link rel="preconnect" href="https://app.snipcart.com" />
      <Link rel="preconnect" href="https://cdn.snipcart.com" />
      <Link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
      />
      <Script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js" defer />
    </Head>
  </Html>
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
