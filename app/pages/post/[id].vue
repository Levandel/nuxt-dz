<script setup lang="ts">
import type {PostData} from '~/interfaces/post.interface';

const route = useRoute();

const postId = route.params.id;
const API_URL = useAPI();

const {data: postData} = useFetch<PostData>(API_URL + `posts/${postId}`);

useSeoMeta({
  title: postData.value?.title,
  description: postData.value?.content.slice(0, 100),
});
</script>

<template>
  <main class="post-page">
    <div class="post-page__top">
      <label class="post-card__user">
        <IconsPurpleLogo />
        <p>PurpleSchool</p>
      </label>

      <p class="post-card__top-date">4 дня назад</p>
    </div>

    <div class="post-page__middle">
      <h1 class="post-page__header">{{ postData?.title }}</h1>
      <p class="post-page__text">{{ postData?.content }}</p>
    </div>

    <div class="post-page__bottom">
      <label>
        {{ postData?.likes }}
        <button>
          <Icon name="custom:like" size="18" />
        </button>
      </label>
      <label>
        {{ postData?.dislikes }}
        <button>
          <Icon name="custom:dislike" size="18" />
        </button>
      </label>
    </div>
  </main>
</template>

<style>
.post-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  margin-top: 48px;
  gap: 14px;

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
  &__header {
    line-height: 1;
    font-size: 22px;
    font-weight: 400;
  }
  &__text {
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-black-light);
  }
  &__bottom {
    display: flex;
    align-items: center;
    margin-top: 14px;
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
}
</style>
