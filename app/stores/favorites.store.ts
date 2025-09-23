import type {PostActions} from '~/interfaces/post.interface';

export const useFavoriteStore = defineStore(
  'favoriteStore',
  () => {
    const config = useRuntimeConfig();
    const API_URL = config.public.apiurl;

    const reactedPosts = ref<PostActions[]>([]);

    const reactPost = async (id: number, action: 'like' | 'dislike') => {
      const post = reactedPosts.value.find((item) => item.id === id);

      if (post?.action === action) {
        return;
      }

      try {
        await $fetch(API_URL + `posts/${id}/${action}`, {method: 'POST'});

        if (post) {
          reactedPosts.value = reactedPosts.value.map((item) => {
            if (item.id === id) {
              return {id: id, action: action};
            }

            return item;
          });
        } else {
          reactedPosts.value.push({id, action});
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      reactedPosts,

      reactPost,
    };
  },
  {
    persist: true,
  },
);
