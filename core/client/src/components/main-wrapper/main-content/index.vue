<template>
  <div class="feeds">
    <div class="container" v-for="item in items">
      <feed-item></feed-item>
    </div>
  </div>
</template>

<script>
  import feedItem from './item.vue';

  export default {
    components: { feedItem },

    data() {
      return {
        items: [{ one: 'one' }, { two: 'two'}]
      }
    }
  }
</script>
