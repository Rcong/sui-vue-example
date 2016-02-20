import Vue from 'vue'
import Router from 'vue-router'
import App from './app.vue'
import Home from './views/home.vue'
import Favorite from './views/favorite.vue'
import Me from './views/me.vue'

// install router
Vue.use(Router);

// routing
var router = new Router();

router.map({
  '/': {
    name: 'home',
    component: Home,
  },
  '/home': {
    component: Home
  },
  '/favorite': {
    component: Favorite
  },
  '/me': {
    component: Me
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

// router.redirect({
//   '*': '/home'
// });

router.start(App, '#app');
