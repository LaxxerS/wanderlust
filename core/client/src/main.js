import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';
import registerRouters from './routers';
import App from './app.vue'

import ls from './services/ls';

window.Vue = Vue;
Vue.config.debug = true;

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000/api/v1.0';
Vue.http.interceptors.push({
  request(r) {
    var token = ls.get('token');

    if (token) {
      Vue.http.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return r;
  },

  response(r) {
    if (r.data && r.data.id && r.data.token && r.data.token.length > 10) {
      ls.set('id', r.data.id);
      ls.set('token', r.data.token);
    }

    return r;
  }
});

var router = new VueRouter();
registerRouters(router);

router.start(App, 'app');
