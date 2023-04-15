import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/Layout.vue';
import Home from '../pages/Home/Home.vue';
import Chat from '../pages/Chat/Chat.vue';
import Login from '../pages/Login/Login.vue';
import Pricing from '../pages/Pricing/Pricing.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'chat',
                name: 'chat',
                component: Chat,
            },
            {
                path: 'pricing',
                name: 'pricing',
                component: Pricing,
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
