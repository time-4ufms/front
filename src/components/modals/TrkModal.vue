<template>
  <Teleport to="body">
    <Transition>
      <div class="shadow" v-if="open" @click="emit('shadowClick')">
        <div class="modal" @click.stop>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps<{
    modelValue: boolean
  }>();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void,
    (e: 'shadowClick'): void,
  }>();

  const open = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    },
  });
</script>
<style lang="scss">
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $overlay-shadow;
    padding: 64px;
    z-index: 5;

    .modal {
      display: flex;
      justify-content: center;
      transition: all;
      width: fit-content;
      z-index: 6;
    }
  }

  .v-enter-active, .v-leave-active {
    transition: opacity 0.2s ease-in;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }
</style>
