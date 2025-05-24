// router/index.ts ou router.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/dashboard.vue';
import Descricao from '@/views/descricao.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/descricao', name: 'Descricao', component: Descricao }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;