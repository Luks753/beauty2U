import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home';
import login from '../pages/login';
import userForm from '../pages/userForm';
import professionalForm from '../pages/professionalForm';
import about from '../pages/about';
import map from '../pages/map';
import showDetails from '../pages/showDetails';
import categoriesList from '../pages/categoriesList';

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
      path: '/professionalForm',
      name: 'professionalForm',
      component: professionalForm,
    },
    {
      path: '/map',
      name: 'map',
      component: map,
    },
    {
      path: '/showDetails',
      name: 'showDetails',
      component: showDetails,
    },
    {
      path: '/categoriesList',
      name: 'categoriesList',
      component: categoriesList
    },
  ],
});
