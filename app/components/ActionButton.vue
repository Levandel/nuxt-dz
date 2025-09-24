<script setup lang="ts"></script>

<template>
  <button class="action-button">
    <slot />
  </button>
</template>

<style scoped>
.action-button {
  width: 100%;
  height: 41px;
  border: none;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 18px;
  border-radius: 20px;
  color: var(--color-white);
  background-color: var(--color-black);
  transition: background-color 0.2s ease-in;
}
.action-button:hover {
  background-color: var(--color-black-light);
}
</style>
