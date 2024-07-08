import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home';
import Retrieve from './views/Retrieve';
import FirebaseLink from './views/FirebaseLink';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/b1/:code',
      component: Home,
    },
    {
      path: '/b2/:code',
      component: Home,
    },
    {
      path: '/b3/:code',
      component: Home,
    },
    {
      path: '/retrieve/:id',
      component: Retrieve,
    },
    {
      path: '/flink',
      component: FirebaseLink,
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
});

export default router;
