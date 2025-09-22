<script setup lang="ts">
import type {GetPostDataResponce} from '~/interfaces/post.interface';

const config = useRuntimeConfig();
const BASE_URL = config.public.apiurl;

const {data: postsData} = useFetch<GetPostDataResponce>(BASE_URL + 'posts');
</script>

<template>
  <main class="home-page">
    <div class="home-page__tabs">
      <NuxtLink to="#"> По дате </NuxtLink>
      <NuxtLink to="#"> По рейтингу </NuxtLink>
    </div>

    <div class="home-page__posts">
      <div
        v-for="post in postsData?.posts"
        :key="post.id"
        class="home-page__posts-cell">
        <PostCard :post="post" />

        <div class="home-page__divider" />
      </div>
    </div>
  </main>
</template>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 60px;
  gap: 38px;

  &__tabs {
    display: flex;
    align-items: center;
    padding-bottom: 17px;
    border-bottom: 1px solid var(--color-divider);
    gap: 42px;

    & a {
      line-height: 1;
      font-size: 16px;
    }
    & a:hover {
      color: var(--color-black-light);
    }
  }
  &__posts {
    display: flex;
    flex-direction: column;
    gap: 38px;

    &-cell {
      display: flex;
      flex-direction: column;
      gap: 38px;
    }
  }
  &__divider {
    height: 1px;
    max-width: var(--post-max-width);
    border-bottom: 1px solid var(--color-divider);
  }
}
</style>
