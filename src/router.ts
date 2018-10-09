import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function loadView(view: string) {
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About.vue'),
    },
    {
      path: '/liste',
      name: 'liste',
      component: loadView('Liste.vue'),
    },
  ],
});
