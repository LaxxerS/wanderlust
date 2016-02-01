<template>
  <div class="row">
    <budgets></budgets>
    <tags></tags>
  </div>

  <div class="row">
    <expenses></expenses>
  </div>
</template>

<script>
  import budgets from './budgets.vue';
  import tags from './tags.vue';
  import expenses from './expenses.vue';

  export default {
    components: { budgets, tags, expenses },
  }
</script>
