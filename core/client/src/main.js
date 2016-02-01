import Vue from 'vue'
import resource from 'vue-resource'
import App from './app.vue'

window.Vue = Vue;
Vue.use(resource);
Vue.http.options.root = 'http://localhost:3000/api/v1.0';

// new Vue({
//   el: 'body',
//   components: { App }
// })
new Vue(App).$mount('body');
