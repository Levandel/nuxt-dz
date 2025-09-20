<script setup lang="ts">
import type {NuxtError} from '#app';

const {error} = defineProps<{
  error: NuxtError;
}>();

const formattedStatusMessage = () => {
  if (error.statusCode === 404) {
    return 'Страница не найдена, вернитесь на главную страницу';
  }

  return error.statusMessage;
};
</script>

<template>
  <main class="error__wrapper">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ formattedStatusMessage() }}</p>

    <ActionButton class="error__button">На главную</ActionButton>
  </main>
</template>

<style scoped>
.error__wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.error__button {
  max-width: 301px;
  margin-top: 24px;
}
.error__wrapper h1 {
  line-height: 1;
  font-size: 120px;
  font-weight: 500;
}
.error__wrapper p {
  line-height: 1.5;
  font-size: 16px;
  font-weight: 300;
}
</style>
