<template>
  <div class="column">
    <h1>Wanderlust</h1>
    <div class="card">
      <input
        type="text"
        placeholder="Username"
        v-model="credentials.username"
      >
      <input
        type="password"
        placeholder="Password"
        v-model="credentials.password"
      >
    <button type="submit" name="button" @click.prevent="submit()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      alert(this.credentials.username);
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}
body {
  margin: 0;
}
.column {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
