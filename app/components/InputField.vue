<script setup lang="ts">
const {iconName, placeholder} = defineProps<{
  iconName: string;
  placeholder: string;
}>();

const value = defineModel<string>();
</script>

<template>
  <div class="input__wrapper">
    <Icon class="input__icon" :name="`custom:${iconName}`" size="24" />
    <input
      v-model="value"
      class="input"
      type="text"
      :placeholder="placeholder" />
  </div>
</template>

<style scoped>
.input__wrapper {
  position: relative;
  width: fit-content;
}

.input {
  line-height: 1;
  font-size: 16px;
  border: 1px solid var(--color-divider);
  border-radius: 20px;
  padding: 11px 47px;

  &::placeholder {
    color: var(--color-black);
  }
  &__icon {
    position: absolute;
    color: var(--color-black);
    transform: translateY(-50%);
    left: 14px;
    top: 50%;
  }
}
</style>
