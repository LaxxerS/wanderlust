import Home from './components/main/home.vue';
import loginForm from './components/auth/login.vue';
import Budgets from './components/main/budgets.vue';

export default function(router) {

  router.map({
    '/': {
      name: 'home',
      component: Home
    },

    '/login': {
      name: 'login',
      component: loginForm
    },

    '/budgets': {
      name: 'budgets',
      component: Budgets
    }
  })
}
