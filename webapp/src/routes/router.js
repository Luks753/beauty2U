import Vue from 'vue';
import Router from 'vue-router';
import home from '../pages/home/index';
import login from '../pages/login/index';

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
            path: '/register',
            name: 'register',
            component: login,
        },
    ],
});
