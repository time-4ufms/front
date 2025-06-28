<template>
  <nav class="sidebar">
    <div class="items-container">
      <SideBarItem icon="mdi-home" route="Home"  title="Home"/>
      <SideBarItem icon="mdi mdi-account-edit" route="Organizacao"  title="Organização"/>
      <SideBarItem icon="mdi-chart-box" route="Dashboard" title="Dashboard"/>
      <SideBarItem icon="mdi-account-cash"route="Descricao" title="Tesouro"/>
       <SideBarItem icon="mdi-bank"route="Estban" title="EstBan"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import SideBarItem from './SideBarItem.vue';
  
</script>

<style lang="scss">
.sidebar {
  background-color: $sidebar-color;
  width: 96px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .items-container {
    padding: 32px 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    min-height: 512px;
    gap: 28px;
  }
}
</style>
