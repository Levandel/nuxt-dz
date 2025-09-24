<script setup lang="ts">
const value = defineModel<string>();
</script>

<template>
  <textarea v-model="value" class="textarea" rows="2" />
</template>

<style scoped>
.textarea {
  resize: none;
  min-height: 0;
  line-height: 1;
  font-size: 16px;
  border: none;

  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
    border: none;
  }
}
</style>
