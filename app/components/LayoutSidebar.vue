<script setup lang="ts"></script>

<template>
  <aside class="sidebar">
    <NuxtLink to="/">
      <Icon name="custom:home" size="24" />
    </NuxtLink>

    <div class="sidebar__bottom">
      <IconsPurpleLogo />

      <Icon name="custom:logout" size="24" />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  --sidebar-padding: 45px;

  width: var(--sidebar-width);
  height: calc(100vh - (var(--sidebar-padding) * 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--sidebar-padding);
  padding-bottom: var(--sidebar-padding);
  border-right: 1px solid var(--color-divider);
}
.sidebar__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.sidebar a {
  color: var(--color-black);
}
.sidebar a:hover {
  color: var(--color-black-light);
}
</style>
