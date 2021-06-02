import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home';
import login from '../pages/login';
import userForm from '../pages/userForm';
import about from '../pages/about';
import map from '../pages/map';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/userForm',
      name: 'userForm',
      component: userForm,
    },
    {
      path: '/map',
      name: 'map',
      component: map,
    },
  ],
});
