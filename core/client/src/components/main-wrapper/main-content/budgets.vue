<template>
  <div class="card two">

  </div>
</template>

<script>
  import budgetStore from '../../../stores/budget';

  export default {
    data() {
      return {
        state: budgetStore.state
      }
    }
  }
</script>
