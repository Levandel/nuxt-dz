<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>POST {{ route.params.id }}</div>
</template>
