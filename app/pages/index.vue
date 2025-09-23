<script setup lang="ts">
import type {GetPostDataResponce} from '~/interfaces/post.interface';

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

if (!route.query.sort) {
  router.replace({
    query: {
      sort: 'date',
    },
  });
}

const query = computed(() => ({
  sort: route.query.sort || 'date',
}));

const {data: postsData} = useFetch<GetPostDataResponce>(API_URL + 'posts', {
  key: 'get-posts',
  query,
});
</script>

<template>
  <main class="home-page">
    <div class="home-page__tabs">
      <NuxtLink
        :class="{'home-page__tabs-active': route.query.sort === 'date'}"
        :to="{query: {sort: 'date'}}">
        По дате
      </NuxtLink>
      <NuxtLink
        :class="{'home-page__tabs-active': route.query.sort === 'rating'}"
        :to="{query: {sort: 'rating'}}">
        По рейтингу
      </NuxtLink>
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
  margin-bottom: 60px;
  margin-top: 48px;
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

    &-active {
      color: var(--color-gray-dark);
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
