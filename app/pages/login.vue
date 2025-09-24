<script setup lang="ts">
const handleLogin = () => {};
</script>

<template>
  <main class="login-page">
    <h1 class="login-page__header">Вход на платформу</h1>

    <form class="login-page__form">
      <InputField placeholder="Email" icon-name="email" />
      <InputField placeholder="Пароль" icon-name="key" />

      <ActionButton @click="handleLogin()">Войти в аккаунт</ActionButton>
    </form>
  </main>
</template>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 27px;

  &__header {
    line-height: 1;
    font-size: 16px;
    font-weight: 500;
  }
  &__form {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}
</style>
