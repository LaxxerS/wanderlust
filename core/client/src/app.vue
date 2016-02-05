<template>
  <div id="app" v-show="authenticated">
    <div class="wrapper">
      <main-content></main-content>
      <side-bar></side-bar>
    </div>
  </div>

  <div class="column login-form" v-else>
    <login-form></login-form>
  </div>
</template>

<script>
  import mainContent from './components/main-wrapper/main-content/index.vue';
  import sideBar from './components/main-wrapper/sidebar/index.vue';
  import loginForm from './components/auth/login-form.vue';

  import sharedStore from './stores/shared';

  import ls from './services/ls';

  export default {
    replace: false,

    components: { mainContent, sideBar, loginForm },

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
/*
background-color: #ffffff;
border:1px solid rgba(0,0,0,0.04);
box-shadow:0 1px 4px rgba(0,0,0,0.03);
border-radius:3px

row
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

column
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
*/
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

.wrapper {
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
}

.feeds {
  flex: 2;
  padding: 20px;
}

.sides {
  flex: 1;
  padding: 20px;
}

.container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.item {
  width: 100%;
  min-height: 250px;
  background-color: #ffffff;
  border:1px solid rgba(0,0,0,0.04);
  box-shadow:0 1px 4px rgba(0,0,0,0.03);
  border-radius:3px;
  margin-bottom: 10px;
}


</style>
