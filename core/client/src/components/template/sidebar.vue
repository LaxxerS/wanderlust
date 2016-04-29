<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
          <div class="logo">
            <a href="" class="simple-text"></a>
          </div>

          <div class="sidebar-avatar text-center">
            <img src="https://api.adorable.io/avatars/80/abott@adorable.png" alt="" class="img-circle">
          </div>

          <div class="sidebar-name text-center">
            <p>Greg Noak</p>
          </div>

          <ul class="nav">
              <li v-bind:class="{ 'active': isActive('home') }">
                  <a v-link="{ name: 'home' }">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      <p>Home</p>
                  </a>
              </li>
              <li v-bind:class="{ 'active': isActive('budgets') }">
                  <a v-link="{ name: 'budgets' }">
                      <i class="fa fa-usd" aria-hidden="true"></i>
                      <p>Budgets</p>
                  </a>
              </li>
              <li>
                  <a href="">
                      <i class="fa fa-bolt" aria-hidden="true"></i>
                      <p>Logout</p>
                  </a>
              </li>
          </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      isActive(location) {
        return location === this.$route.name;
      }
    }
  }
</script>

<style>

</style>
