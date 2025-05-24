<template>
  <router-link :class="['sidebar-item', active && 'active']" :to="{ name: route }">
    <v-icon :icon="itemIcon" size="32" />
  </router-link>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps<{
    text?: string
    icon: string
    route?: string
    active?: boolean
  }>();

  const itemIcon = computed(() => props.active ? props.icon : `${props.icon}-outline`);
</script>

<style lang="scss">
.sidebar-item {
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  color: $sidebar-icon-inactive-color;

  &:hover, &.active {
    background-color: $sidebar-active-color;
  }

  &.active {
    color: $sidebar-icon-active-color;
  }
}
</style>
