<script setup lang="ts">
const {totalPages} = defineProps<{
  totalPages: number;
}>();

const currentPage = defineModel<number>();

watch(currentPage, () => {});

const editPages = computed(() => {
  const pagesArray: (number | string)[] = [];

  if (totalPages > 0) {
    pagesArray.push(1);
  }

  if (!currentPage.value) {
    return;
  }

  if (totalPages < 6) {
    for (let i = 2; i <= totalPages; i++) {
      pagesArray.push(i);
    }
  } else {
    if (currentPage.value > 3) {
      pagesArray.push('...');

      if (currentPage.value < totalPages - 2) {
        pagesArray.push(currentPage.value - 1);
        pagesArray.push(currentPage.value);
        pagesArray.push(currentPage.value + 1);
        pagesArray.push('...');
      }
      if (currentPage.value === totalPages - 2) {
        pagesArray.push(currentPage.value - 1);
        pagesArray.push(currentPage.value);
        pagesArray.push(currentPage.value + 1);
      }
      if (currentPage.value === totalPages - 1) {
        pagesArray.push(currentPage.value - 2);
        pagesArray.push(currentPage.value - 1);
        pagesArray.push(currentPage.value);
      }
      if (currentPage.value === totalPages) {
        pagesArray.push(currentPage.value - 3);
        pagesArray.push(currentPage.value - 2);
        pagesArray.push(currentPage.value - 1);
      }
      pagesArray.push(totalPages);
    } else {
      if (totalPages > 1) {
        pagesArray.push(2);
      }
      if (totalPages > 2) {
        pagesArray.push(3);
      }
      if (totalPages > 3) {
        pagesArray.push(4);
      }

      if (totalPages > 4) {
        pagesArray.push('...');
        pagesArray.push(totalPages);
      }
    }
  }

  return pagesArray;
});

const choosePage = (page: number | string) => {
  if (typeof page === 'string') {
    return;
  }

  currentPage.value = page;
};
</script>

<template>
  <div v-if="totalPages > 1" class="page-pagination">
    <div
      v-for="(page, index) in editPages"
      :key="index"
      :class="[
        'page-pagination__cell',
        {'page-pagination__cell-active': currentPage === page},
      ]"
      @click="choosePage(page)">
      {{ page }}
    </div>
  </div>
</template>

<style>
.page-pagination {
  width: fit-content;
  display: flex;
  align-items: center;

  &__cell {
    display: flex;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    color: var(--color-gray-dark);

    &-active {
      color: var(--color-black);
    }
  }
  &__cell:not(:last-child) {
    border-right: 1px solid var(--color-divider);
  }
}
</style>
