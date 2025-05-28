// router/index.ts ou router.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/dashboard.vue';
import Descricao from '@/views/descricao.vue';
import Home from '@/views/home.vue';
import Organization from '@/views/organization.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/descricao', name: 'Descricao', component: Descricao },
  { path: '/home', name: 'Home', component: Home},
  { path: '/organizacao', name: 'Organizacao', component: Organization}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;