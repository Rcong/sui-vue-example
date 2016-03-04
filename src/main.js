import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Favorite from './views/Favorite.vue'
import Me from './views/Me.vue'
import Detail from './views/Detail.vue'

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
  },
  '/detail': {
    component: Detail
  }
});

// router.beforeEach(function () {
//   window.scrollTo(0, 0);
// });

// router.redirect({
//   '*': '/home'
// });

router.beforeEach(function ({to, from, next}) {
  let toPath = to.path
  let fromPath = from.path
  console.log('to: ' + toPath + ' from: ' + fromPath)
  if (toPath.replace(/[^/]/g, '').length > 1) {
    router.app.isIndex = false;
  }
  else {
    router.app.isIndex = true;
  }
  next()
})

router.afterEach(function ({to}) {
  console.log(`成功浏览到: ${to.path}`)
  $.refreshScroller();
})

router.start(App, '#app');
