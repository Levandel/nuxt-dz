export const useFavoriteStore = defineStore(
  'favoriteStore',
  () => {
    const favoritesPostsId = ref<number[]>([]);

    return {
      favoritesPostsId,
    };
  },
  {
    persist: true,
  },
);
