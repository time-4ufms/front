<template>
  <v-btn
    type="button"
    class="logoutButton"
    @click="showLogoutModal"
  >
    <v-icon :icon="LogoutOutline" size="32" />
  </v-btn>

  <ConfirmationModal
    v-model="modalOpen"
    :title="t('components.modals.logoutModal.title')"
    :body="t('components.modals.logoutModal.body')"
    @confirm="logoutConfirm"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from '@/composables/useI18n';
  import ConfirmationModal from '@/components/modals/ConfirmationModal.vue';
 
  import LogoutOutline from '../icons/LogoutOutline.vue';

  const { t } = useI18n();
  const modalOpen = ref(false);

  const showLogoutModal = () => {
    modalOpen.value = true;
  };

  const logoutConfirm = () => {
    modalOpen.value = false;

    const { logout } = useUserStore();
    logout();
  };
</script>

<style lang="scss" scoped>
  .logoutButton {
    height: 100%;
    min-width: unset;
    padding: 12px;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    background: none;

    &:hover, &.active {
      background-color: $sidebar-active-color;
    }
  }
</style>
