<template>
  <v-app class="app">
    <div class="layout">
      <SideBar class="sidebar" />
      <main class="content">
        <router-view />
      </main>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import SideBar from '@/components/navigation/SideBar.vue';
</script>

<style scoped lang="scss">
.app {
  height: 100vh;
  overflow: hidden;
}

.layout {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 80px;
  flex-shrink: 0;
}

.content {
  flex: 1;
  overflow-y: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .content {
    padding: 16px;
  }
}

.no-print {
  @media print {
    display: none;
  }
}
</style>
