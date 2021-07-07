import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home';
import login from '../pages/login';
import userForm from '../pages/userForm';
import professionalForm from '../pages/professionalForm';
import about from '../pages/about';
import map from '../pages/map';
import me from '../pages/me';
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
      beforeEnter: (to, from, next) =>{
        if(localStorage.login){
          next({name: 'map'})
        }else{
          next()
        }
      }      
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
      beforeEnter: (to, from, next) =>{
        if(localStorage.login){
          next({name: 'map'})
        }else{
          next()
        }
      } 
    },
    {
      path: '/professionalForm',
      name: 'professionalForm',
      component: professionalForm,
      beforeEnter: (to, from, next) =>{
        if(localStorage.login){
          next({name: 'map'})
        }else{
          next()
        }
      } 
    },
    {
      path: '/me',
      name: 'me',
      component: me,
      beforeEnter: (to, from, next) =>{
        if(localStorage.login){
          next()
        }else{
          next({name: 'userForm'})
        }
      } 
    },
    {
      path: '/map',
      name: 'map',
      component: map,
    },
    {
      path: '/showDetails/:id',
      name: 'showDetails',
      component: showDetails,
    },
    {
      path: '/categoriesList/:nome',
      name: 'categoriesList',
      component: categoriesList
    },
  ],
});
