<script setup lang="ts">
import type {AuthResponse} from '~/interfaces/auth.interface';

const API_URL = useAPI();
const authStore = useAuthStore();

const email = ref<string | undefined>();
const password = ref<string | undefined>();

const handleLogin = async () => {
  try {
    const data = await $fetch<AuthResponse>(API_URL + 'auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    authStore.user = data.user;
    authStore.token = data.token;

    navigateTo('/');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <main class="login-page">
    <h1 class="login-page__header">Вход на платформу</h1>

    <form class="login-page__form">
      <InputField v-model="email" placeholder="Email" icon-name="email" />
      <InputField v-model="password" placeholder="Пароль" icon-name="key" />

      <ActionButton @click.stop.prevent="handleLogin()">
        Войти в аккаунт
      </ActionButton>
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
