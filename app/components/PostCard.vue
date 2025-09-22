<script setup lang="ts">
import type {PostData} from '~/interfaces/post.interface';

const {post} = defineProps<{
  post: PostData;
}>();
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
    <h2 class="post-card__header">{{ post.title }}</h2>
    <p class="post-card__text">
      {{ post.content }}
    </p>

    <div class="post-card__bottom">
      <div class="post-card__rating">
        <label>
          {{ post.likes }}
          <button>
            <Icon name="custom:like" size="18" />
          </button>
        </label>
        <label>
          {{ post.dislikes }}
          <button>
            <Icon name="custom:dislike" size="18" />
          </button>
        </label>
      </div>

      <div class="post-card__actions">
        <button>
          <Icon name="custom:remove" size="17" />
        </button>

        <label>
          <button>
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
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 38px;
  max-width: 534px;
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
