import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});

export default router;
