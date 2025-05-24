<template>
  <v-btn
    class="button"
    :color="disabled ? 'disabled' : color"
    :size="size"
    :prepend-icon="prependIcon"
    :type="type"
    :loading="loading"
    :variant="variant"
    :href="href"
    :max-width="width"
    :max-height="height"
    :disabled="disabled"
    width="100%"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts" setup>

  export interface TrkButtonProps {
    type?: string
    variant?: 'outlined' | 'elevated' | 'plain' | 'text'
    color?: string
    width?: number | string
    height?: number | string
    size?: 'x-large' | 'default'
    prependIcon?: string
    loading?: boolean
    href?: string
    disabled?: boolean
  }

  withDefaults(defineProps<TrkButtonProps>(), {
    variant: 'elevated',
    color: 'primary',
    type: 'button',
    width: 442,
    size: 'x-large',
  });

</script>
<style lang="scss" scoped>
  .button {
    opacity: 1;
    :deep(.v-btn__content) {
      text-transform: none;
      letter-spacing: normal;
    }
  }
</style>
