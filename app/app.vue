<script setup lang="ts">
import '~/assets/styles/reset.css';
import '~/assets/styles/main.css';
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{name: 'page-switch', mode: 'out-in'}" />
  </NuxtLayout>
</template>

<style>
.page-switch-enter-active,
.page-switch-leave-active {
  transition: opacity 0.2s;
}

.page-switch-enter-from,
.page-switch-leave-to {
  opacity: 0;
}
</style>
