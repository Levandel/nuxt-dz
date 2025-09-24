<script setup lang="ts">
import type {GetPostDataResponce} from '~/interfaces/post.interface';

const API_URL = useAPI();
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const currentPage = computed(() => Number(route.query.page) || 1);

const totalPages = computed(() => postsData.value?.total_pages || 1);

if (!route.query.sort) {
  router.replace({
    query: {
      sort: 'date',
      page: 1,
    },
  });
}

watch(currentPage, () => {
  router.replace({
    query: {
      sort: route.query.sort,
      page: currentPage.value,
    },
  });
});

const query = computed(() => ({
  page: route.query.page || 1,
  sort: route.query.sort || 'date',
}));

const {data: postsData, refresh} = useFetch<GetPostDataResponce>(
  API_URL + 'posts',
  {
    key: 'get-posts',
    query,
  },
);

useSeoMeta({
  title: 'Главная',
  description: 'Главная страница VoteApp',
});
</script>

<template>
  <main class="home-page">
    <label v-if="authStore.token" class="home-page__add-post">
      <button class="home-page__add-icon" @click="navigateTo('/post/create')">
        <Icon name="custom:plus" size="12" />
      </button>
      <p>Добавить новое обновление для голосования</p>
    </label>

    <div class="home-page__tabs">
      <NuxtLink
        :class="{'home-page__tabs-active': route.query.sort === 'date'}"
        :to="{query: {sort: 'date', page: currentPage}}">
        По дате
      </NuxtLink>
      <NuxtLink
        :class="{'home-page__tabs-active': route.query.sort === 'rating'}"
        :to="{query: {sort: 'rating', page: currentPage}}">
        По рейтингу
      </NuxtLink>
    </div>

    <div class="home-page__posts">
      <div
        v-for="post in postsData?.posts"
        :key="post.id"
        class="home-page__posts-cell">
        <PostCard :post="post" @refresh-data="refresh()" />

        <div class="home-page__divider" />
      </div>
    </div>

    <PagePagination v-model="currentPage" :total-pages="totalPages" />
  </main>
</template>

<style>
.home-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  margin-left: 136px;
  margin-top: 48px;
  gap: 38px;

  &__add-post {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;

    & p {
      font-size: 16px;
      line-height: 1;
    }
  }
  &__add-icon {
    display: grid;
    border-radius: 50%;
    place-content: center;
    background-color: var(--color-divider);
    cursor: pointer;
    padding: 12px;
    border: none;
  }
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
