import { createWebHistory, createRouter } from 'vue-router';
import Main from './pages/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
