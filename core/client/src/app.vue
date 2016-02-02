<template>
  <div id="app" v-show="authenticated">
    <site-header></site-header>
    <main-wrapper></main-wrapper>
  </div>

  <div class="column login-form" v-else>
    <login-form></login-form>
  </div>
</template>

<script>
  import siteHeader from './components/site-header/index.vue';
  import mainWrapper from './components/main-wrapper/index.vue';
  import loginForm from './components/auth/login-form.vue';

  import sharedStore from './stores/shared';

  import ls from './services/ls';

  export default {
    replace: false,

    components: { siteHeader, mainWrapper, loginForm },

    data () {
        return {
          authenticated: false
        }
    },

    ready () {
      var token = ls.get('token');
      if (token) {
        this.authenticated = true;
        this.init();
      }
    },

    methods: {
      init() {
        sharedStore.init(() => {

        }, () => this.authenticated = false)
      }
    },

    events: {
      'user:loggedin': function () {
        this.authenticated = true;
        this.init();
      }
    }
  }
</script>

<style>

body, html {
  margin: 0;
  height: 100%;
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 6% 15%;
  background-color: #fafafa;
}

.column {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0;
  margin: 0;
}

.row {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  -moz-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  -ms-flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-flow: row wrap;
  margin: 1% auto;
}

.head {
  margin: 0.5% 1%;
}

.card {
  margin: 0.5% 1%;
  min-height: 280px;
  background-color: #ffffff;
  border:1px solid rgba(0,0,0,0.04);
  box-shadow:0 1px 4px rgba(0,0,0,0.03);
  border-radius:3px
}

.head.one,
.card.one {
  flex: 1;
}

.head.two,
.card.two {
  flex: 2;
}

.head.three,
.card.three {
  flex: 3;
}

nav > ul {
  list-style: none;
  text-align: right;
  margin: 0;
}

nav > ul li {
  display: inline-block;
  margin-left: 5%;
}

nav > ul li a {
  text-decoration: none;
  color: #000;
}

.day {
  background-image: url(https://unsplash.it/280?image=922);
  background-size: cover;
}
</style>
