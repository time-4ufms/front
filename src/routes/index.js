// router/index.ts ou router.js
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/dashboard.vue';
import Descricao from '@/views/descricao.vue';
import Home from '../views/home.vue';
import Organization from '@/views/organization.vue';
import Estban from '@/views/Estban.vue';
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/descricao', name: 'Descricao', component: Descricao },
    { path: '/home', name: 'Home', component: Home },
    { path: '/organizacao', name: 'Organizacao', component: Organization },
    { path: '/estban', name: 'Estban', component: Estban }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
//# sourceMappingURL=index.js.map