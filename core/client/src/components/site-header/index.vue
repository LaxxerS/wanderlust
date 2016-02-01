<template>
  <header class="row">
    <user-profile></user-profile>
    <user-control></user-control>
  </header>
</template>

<script>
  import userProfile from './user-profile.vue';
  import userControl from './user-control.vue';

  export default {
    components: { userProfile, userControl },
  }
</script>
