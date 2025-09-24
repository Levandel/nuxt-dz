<script setup lang="ts">
import type {PostData} from '~/interfaces/post.interface';

definePageMeta({
  middleware: 'auth',
});

useSeoMeta({
  title: 'Редактирование поста',
  description: 'Редактирование поста VoteApp',
});

const route = useRoute();
const API_URL = useAPI();
const authStore = useAuthStore();

const postId = route.params.id;

const {data: postData} = await useFetch<PostData>(API_URL + `posts/${postId}`);

const title = ref<string | undefined>(postData.value?.title);
const content = ref<string | undefined>(postData.value?.content);

const createPost = async () => {
  try {
    await $fetch(API_URL + `posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },

      method: 'PUT',
      body: {
        title: title.value,
        content: content.value,
      },
    });

    navigateTo('/');
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <main class="edit-post-page">
    <div class="edit-post-page__icon">
      <Icon name="custom:plus" size="12" />
    </div>

    <InputPostTitle
      v-model="title"
      class="edit-post-page__title"
      placeholder="Тема" />

    <PostTextarea
      v-model="content"
      class="edit-post-page__content"
      placeholder="Текст..." />

    <ActionButton class="crediteate-post-page__button" @click="createPost()">
      Сохранить
    </ActionButton>
  </main>
</template>

<style scoped>
.edit-post-page {
  position: relative;
  margin-left: 153px;
  margin-top: 39px;
  min-height: 80vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-divider);
  gap: 20px;

  &__icon {
    position: absolute;
    display: grid;
    border-radius: 50%;
    place-content: center;
    background-color: var(--color-divider);
    transform: translateX(-50%);
    cursor: pointer;
    padding: 12px;
  }
  &__title {
    margin-top: 4px;
    max-width: 370px;
    margin-left: 25px;
  }
  &__content {
    max-width: 80%;
    margin-left: 26px;
    display: flex;
    flex: 1;
  }
  &__button {
    max-width: 142px;
    align-self: center;
  }
}
</style>
