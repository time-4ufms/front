<template>
  <TrkModal v-model="open" @shadow-click="open = false">
    <div class="modal-card">
      <div class="modal-title">
        {{ title }}
      </div>
      <div class="modal-content">
        {{ body }}
      </div>
      <div class="modal-actions">
        <TrkButton @click="emit('confirm')">
          {{ t('components.modals.confirmationModal.confirm') }}
        </TrkButton>
        <TrkButton
          variant="plain"
          color="danger"
          @click="open = false"
        >
          {{ t('components.modals.confirmationModal.cancel') }}
        </TrkButton>
      </div>
    </div>
  </TrkModal>
</template>
<script lang="ts" setup>
  import TrkModal from './TrkModal.vue';
  import TrkButton from '../TrkButton.vue';
  import { useI18n } from '@/composables/useI18n';
  import { computed } from 'vue';

  const { t } = useI18n();

  const props = defineProps<{
    title: string
    body: string
    modelValue: boolean
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void,
    (e: 'cancel'): void,
    (e: 'confirm'): void,
  }>();

  const open = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
      if (!value) emit('cancel');
    },
  });

</script>
<style lang="scss">
  .modal-card {
    max-width: 836px;
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    background-color: $bg-primary;
    border-radius: 8px;
    box-shadow: 4px 4px 12px $overlay-shadow;

    .modal-title {
      text-align: center;
      color: $text-primary;
      font-size: 24px;
      font-weight: bold;
    }

    .modal-content {
      max-width: 724px;
      font-size: 20px;
      color: $text-secondary;
      text-align: center;
    }

    .modal-actions {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 442px;
      width: 100%;
      gap: 24px;
    }
  }
</style>
