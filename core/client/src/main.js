import Vue from 'vue'
import resource from 'vue-resource'
import App from './app.vue'

import ls from './services/ls';

window.Vue = Vue;
Vue.use(resource);
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

new Vue(App).$mount('body');
