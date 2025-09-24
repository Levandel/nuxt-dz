import type {UserData} from '~/interfaces/user.interface';

export const useAuthStore = defineStore(
  'authStore',
  () => {
    const user = ref<UserData>({id: null, email: ''});
    const token = ref<string | undefined>('');

    const setToken = (value: string) => {
      token.value = value;
    };

    const setUserData = (data: UserData) => {
      user.value = data;
    };
    const clearUserData = () => {
      user.value = {id: null, email: ''};
    };

    const clearToken = () => {
      token.value = undefined;
    };

    const logout = () => {
      clearToken();
      clearUserData();
    };

    return {
      user,
      token,

      logout,
      setToken,
      clearToken,
      setUserData,
      clearUserData,
    };
  },
  {
    persist: true,
  },
);
