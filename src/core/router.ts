import { createRouter, createWebHistory, Router } from 'vue-router';
import './routes.d';

import Home from '../pages/Home.vue';

const routes: Routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
