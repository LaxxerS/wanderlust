<template>
  <div class="wrapper">
      <div class="sidebar">

      	<div class="sidebar-wrapper">
              <div class="logo">
                <a href="" class="simple-text">Wanderlust</a>
              </div>

              <div class="sidebar-avatar text-center">
                <img src="http://placehold.it/80" alt="" class="img-circle">
              </div>
              <ul class="nav">
                  <li class="active">
                      <a href="dashboard.html">
                          <i class="fa fa-tachometer" aria-hidden="true"></i>
                          <p>Dashboard</p>
                      </a>
                  </li>
                  <li>
                      <a href="user.html">
                          <i class="fa fa-usd" aria-hidden="true"></i>
                          <p>Budgets</p>
                      </a>
                  </li>
                  <li>
                      <a href="table.html">
                          <i class="fa fa-bolt" aria-hidden="true"></i>
                          <p>Logout</p>
                      </a>
                  </li>
              </ul>
      	</div>
      </div>

      <div class="main-panel">
          <div class="content">
              <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-12">
                        <div class="header">
                          <h3 class="title">Dashboard</h3>
                        </div>
                    </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="card">
                              <div class="header">
                                  <h4 class="title">Email Statistics</h4>
                                  <p class="category">Last Campaign Performance</p>
                              </div>
                              <div class="content">
                                  <div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>

                                  <div class="footer">
                                      <div class="legend">
                                          <i class="fa fa-circle text-info"></i> Open
                                          <i class="fa fa-circle text-danger"></i> Bounce
                                          <i class="fa fa-circle text-warning"></i> Unsubscribe
                                      </div>
                                      <hr>
                                      <div class="stats">
                                          <i class="fa fa-clock-o"></i> Campaign sent 2 days ago
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-md-8">
                          <div class="card">
                              <div class="header">
                                  <h4 class="title">Users Behavior</h4>
                                  <p class="category">24 Hours performance</p>
                              </div>
                              <div class="content">
                                  <div id="chartHours" class="ct-chart"></div>
                                  <div class="footer">
                                      <div class="legend">
                                          <i class="fa fa-circle text-info"></i> Open
                                          <i class="fa fa-circle text-danger"></i> Click
                                          <i class="fa fa-circle text-warning"></i> Click Second Time
                                      </div>
                                      <hr>
                                      <div class="stats">
                                          <i class="fa fa-history"></i> Updated 3 minutes ago
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


      </div>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {}
</script>

<style>

</style>
