<script setup lang="ts">
const value = defineModel<string>();
</script>

<template>
  <input v-model="value" class="input" type="text" maxlength="40" />
</template>

<style scoped>
.input {
  width: 100%;
  line-height: 1;
  font-size: 16px;
  padding: 6px;
  border: none;

  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
}
</style>
