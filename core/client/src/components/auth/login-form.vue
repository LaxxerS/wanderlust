<template>
  <h1>Wanderlust</h1>
  <form @submit.prevent="login" :class="{ error: failed }">
    <input
      type="text"
      placeholder="Username"
      v-model="username"
    >
    <input
      type="password"
      placeholder="Password"
      v-model="password"
    >
  <button type="submit" name="button">Login</button>
</form>
</template>

<script>
  import userStore from '../../stores/user';

  export default {
    data () {
      return {
        username: '',
        password: '',
        failed: false
      };
    },

    methods: {
      login () {
        this.failed = false;

        userStore.login(this.username, this.password, () => {

          this.failed = false;

          this.password = '';

          this.$dispatch('user:loggedin');
        }, () => {
          this.failed = true;
        });
      }
    }
  }
</script>

<style>


h1 {
  font-family: 'Great Vibes', Helvetica, sans-serif;
  font-size: 6rem;
  margin: 15px 0;
}

button:focus {
    outline: none;
    border: none;
}

.error {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
