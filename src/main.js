import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from "axios";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';

Vue.config.productionTip = false;

// Set Axios default options
Axios.defaults.baseURL = 'http://pipetajhiz.com/testarea/api/v1';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
