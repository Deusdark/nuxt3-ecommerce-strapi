<template>
  <div>
    SSR calls
    <br />
    <div><code>$fetch('/api/hello')</code> {{ directTime }}ms</div>
    <div>
      <code>$fetch('{{ url }}')</code> {{ urlTime }}ms
    </div>
  </div>
</template>

<script setup>
const origin = "https://dazzling-haibt-abae3f.netlify.app";
const path = "/api/hello";

const [directTime] = await useTimer($fetch(path));
const url = origin + path;

const [urlTime] = await useTimer($fetch(url));
</script>
