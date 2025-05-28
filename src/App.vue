<template>
  <v-app>
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
.layout {
  display: flex;
  height: 100vh;
}

.no-print {
  @media print {
    display: none;
  }
}

.content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.sidebar {
  width: 80px;
}
@media (max-width: 768px) {
  .content {
    padding: 16px;
  }
}
</style>
