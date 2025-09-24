<script setup lang="ts">
import type {PostData} from '~/interfaces/post.interface';

const {post} = defineProps<{
  post: PostData;
}>();

const emits = defineEmits(['refreshData']);

const API_URL = useAPI();
const authStore = useAuthStore();
const favoriteStore = useFavoriteStore();

const goToPost = (id: number) => {
  navigateTo(`/post/${id}`);
};

const chooseIconName = (name: string) => {
  const existedPost = favoriteStore.reactedPosts.find(
    (item) => item.id === post.id,
  );

  if (!existedPost) {
    return name;
  }

  if (existedPost?.action === name) {
    return name + '-filled';
  } else {
    return name;
  }
};

const handleLikePost = () => {
  favoriteStore.reactPost(post.id, 'like');
  emits('refreshData');
};

const handleDislikePost = () => {
  favoriteStore.reactPost(post.id, 'dislike');
  emits('refreshData');
};

const handleEditPost = (id: number) => {
  navigateTo(`/post/edit/${id}`);
};

const handleDeletePost = async (id: number) => {
  try {
    await $fetch(API_URL + `posts/${id}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },

      method: 'DELETE',
    });

    emits('refreshData');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="post-card">
    <div class="post-card__top">
      <label class="post-card__user">
        <IconsPurpleLogo />
        <p>PurpleSchool</p>
      </label>

      <p class="post-card__top-date">4 дня назад</p>
    </div>
    <div class="post-card__middle" @click="goToPost(post.id)">
      <h2 class="post-card__header">{{ post.title }}</h2>
      <p class="post-card__text">
        {{ post.content }}
      </p>
    </div>

    <div class="post-card__bottom">
      <ClientOnly>
        <div class="post-card__rating">
          <label>
            {{ post.likes }}
            <button @click="handleLikePost()">
              <Icon :name="`custom:${chooseIconName('like')}`" size="18" />
            </button>
          </label>
          <label>
            {{ post.dislikes }}
            <button @click="handleDislikePost()">
              <Icon :name="`custom:${chooseIconName('dislike')}`" size="18" />
            </button>
          </label>
        </div>
      </ClientOnly>

      <div class="post-card__actions">
        <button @click="handleDeletePost(post.id)">
          <Icon name="custom:remove" size="17" />
        </button>

        <label>
          <button @click="handleEditPost(post.id)">
            <Icon name="custom:edit" size="14" />
          </button>
          Изменить
        </label>
      </div>
    </div>
  </div>
</template>

<style>
.post-card {
  display: flex;
  flex-direction: column;
  max-width: var(--post-max-width);
  gap: 10px;

  &__top {
    display: flex;
    align-items: center;
    gap: 17px;
    line-height: 1;

    &-date {
      color: var(--color-gray-dark);
      font-size: 14px;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 8px;

    & p {
      color: var(--color-black-light);
      font-size: 14px;
    }
  }
  &__middle {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 10px;
  }
  &__header {
    font-size: 22px;
    line-height: 1;
    font-weight: 400;
  }
  &__text {
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-black-light);
  }
  &__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
  }
  &__rating {
    display: flex;
    align-items: center;
    gap: 14px;

    & label {
      display: flex;
      align-items: center;
      color: var(--color-black-light);
      cursor: pointer;
      gap: 5px;
    }
    & button {
      padding: 2px;
      border: none;
      color: var(--color-gray-dark);
    }
    & button:hover {
      color: var(--color-black-light);
    }
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;

    & label {
      display: flex;
      align-items: center;
      color: var(--color-black-light);
      cursor: pointer;
      gap: 5px;
    }
    & button {
      padding: 2px;
      border: none;
      color: var(--color-gray-dark);
    }
    & button:hover {
      color: var(--color-black-light);
    }
  }
}
</style>
