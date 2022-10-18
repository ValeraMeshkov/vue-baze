import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/Info/Info.vue'),
  },
  {
    path: '/canvas1',
    name: 'canvas1',
    component: () => import('@/views/Canvas1/Canvas1.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
