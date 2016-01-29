<template>
  <header class="row">
    <div class="head two">

    </div>
    <nav class="head one">
      <ul>
        <li><a href="#">Budget</a></li>
        <li><a href="#">Expenses</a></li>
        <li><a href="#">Category</a></li>
      </ul>
    </nav>
  </header>
  <div class="row">
    <div class="card one">

    </div>
    <div class="card two">
      Budget
    </div>
  </div>

  <div class="row">
    <div class="card two">
      1
    </div>
    <div class="card one">
      2
    </div>
  </div>

  <div class="row">
    <div class="card three">
      1
    </div>
  </div>
</template>

<script>

</script>

<style>
body, html {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 6% 15%;
  background-color: #f3f4f4;
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
  border: solid 1px #e7e7e7;
  margin: 0.5% 1%;
  min-height: 280px;
  background-color: #ffffff;
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
