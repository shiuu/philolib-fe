import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import Books from '../home/Books.vue';
import People from '../home/People.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/books',
    name: 'Books',
    component: Books,
  }, {
    path: '/people',
    name: 'People',
    component: People,
  }],
});
