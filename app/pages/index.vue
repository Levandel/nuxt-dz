<script setup lang="ts">
const route = useRoute();

const currentSortParam = computed(() => route.query.sort);
</script>

<template>
  <main class="home-page">
    <div class="home-page__tabs">
      <NuxtLink
        :class="{'tab-active': currentSortParam === 'date'}"
        :to="{query: {sort: 'date'}}">
        По дате
      </NuxtLink>
      <NuxtLink
        :class="{'tab-active': currentSortParam === 'rating'}"
        :to="{query: {sort: 'rating'}}">
        По рейтингу
      </NuxtLink>
    </div>

    <div class="home-page__posts">
      <PostCard />
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
  }
}
.tab-active {
  color: var(--color-gray-dark);
}
</style>
