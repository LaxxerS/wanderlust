<template>
  <div class="wrapper" v-bind:class="{ 'color': show('login') }">
    <sidebar v-if="!show('login')"></sidebar>
    <div class="main-panel" v-bind:class="{ 'full-width': show('login') }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Sidebar from './template/sidebar.vue';

  export default {
    components: { Sidebar },

    methods: {
      show(location) {
        return location === this.$route.name;
      },
    }
  }
</script>

<style>
  .color {
    background: #9CADB7;
  }

  .full-width {
    width: 100% !important;
    background-image: url(https://static.pexels.com/photos/86752/pexels-photo-86752.jpeg);
    background-size: cover;
  }
</style>
