/* eslint-disable import/extensions */
import Vue from 'vue';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import Vuelidate from 'vuelidate';
import messagePlugin from '@/utils/message.plugin';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

// eslint-disable-next-line import/order
import Loader from '@/components/app/Loader';

// eslint-disable-next-line import/order
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);

Vue.component('Loader', Loader);

Vue.use(messagePlugin);
Vue.use(Vuelidate);


firebase.initializeApp({
  apiKey: 'AIzaSyBwQ1pZJBC8zDQ5j68D4rHiKojtN3tgSlI',
  authDomain: 'vue-crm-5dfe4.firebaseapp.com',
  databaseURL: 'https://vue-crm-5dfe4.firebaseio.com',
  projectId: 'vue-crm-5dfe4',
  storageBucket: 'vue-crm-5dfe4.appspot.com',
  messagingSenderId: '1041314631243',
  appId: '1:1041314631243:web:43fdf2051e1326a3c287ce',
  measurementId: 'G-BN6741X282',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
