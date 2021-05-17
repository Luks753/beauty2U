import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './routes/router'
import App from './App';

// Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
