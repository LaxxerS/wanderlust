import Home from './components/main/home.vue';
import loginForm from './components/auth/login.vue';

export default function(router) {

  router.map({
    '/': {
      name: 'home',
      component: Home
    },

    '/login': {
      name: 'login',
      component: loginForm
    }
  })
}
