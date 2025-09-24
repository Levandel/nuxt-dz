import type {UserData} from '~/interfaces/user.interface';

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const user = ref<UserData>({id: null, email: ''});
    const token = ref<string | undefined>('');

    const getToken = (value: string) => {
      token.value = value;
    };

    const clearToken = () => {
      token.value = undefined;
    };

    return {
      user,
      token,

      getToken,
      clearToken,
    };
  },
  {
    persist: true,
  },
);
