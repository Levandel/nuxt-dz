export default defineNuxtRouteMiddleware(() => {
  const authStore = useCookie<{token: string}>('authStore');

  if (!authStore.value?.token) {
    return navigateTo('/login');
  }
});
