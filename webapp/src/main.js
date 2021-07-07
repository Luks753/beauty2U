import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './routes/router'
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';
import StarRating from 'vue-star-rating';

Vue.component('star-rating', StarRating.default);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAExBfy9-lotjWj9tZpIzSc_--tWMbwKUk',
    libraries: 'places',
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
