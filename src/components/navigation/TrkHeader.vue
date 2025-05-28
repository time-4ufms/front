<template>
  <div class="d-flex justify-space-between">
    <div class="header" v-if="title">
      <h2 class="title">
        {{ title }}
      </h2>
      
      <div class="description" v-if="description">
        {{ description }}
      </div>
    </div>

    <div id="header-action">
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const { currentRoute } = useRouter();
  const route = useRoute();

  const title = computed(() => currentRoute.value.meta.title);
  const description = computed(() => currentRoute.value.meta.description);



</script>
<style lang="scss" scoped>
  #header-action {
    display: flex;
    justify-content: flex-end;
  }

  .header {
    .title {
      margin-bottom: 16px;
    }

    .breadcrumbs {
      padding: 0;

      :deep(.v-breadcrumbs-item) {
        padding: 0;
        color: $primary-color;
        text-decoration: underline;
        font-size: 20px;
        opacity: 1;

        &.v-breadcrumbs-item--disabled {
          color: $text-primary;
          text-decoration: none;
        }
      }
    }

    .description {
      color: $text-secondary;
      font-size: 16px;
      font-style: normal;
      line-height: 22px;
    }
  }
</style>