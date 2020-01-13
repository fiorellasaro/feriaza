import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAGmOY1QwgJ_XsNynzFR8k5wWjdIhfyfPk",
  authDomain: "feriaza-363e5.firebaseapp.com",
  databaseURL: "https://feriaza-363e5.firebaseio.com",
  projectId: "feriaza-363e5",
  storageBucket: "feriaza-363e5.appspot.com",
  messagingSenderId: "429386786665"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
