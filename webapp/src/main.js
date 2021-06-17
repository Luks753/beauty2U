import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './routes/router'
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCPZyJF-WHtw33YKsys6E8x64grzb_RWfE',
    libraries: 'places',
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
