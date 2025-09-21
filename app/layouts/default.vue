<script setup lang="ts"></script>

<template>
  <div class="layout">
    <LayoutSidebar class="layout__sidebar" />
    <div class="layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.layout__sidebar {
  position: fixed;
  z-index: 5;
}
.layout__content {
  --content-margin-left: calc(var(--sidebar-width) + 136px);

  width: calc(100% - var(--content-margin-left));
  margin-left: var(--content-margin-left);
}
</style>
