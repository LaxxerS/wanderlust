<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row auth longer">
        <div class="col-md-6">
          <div class="card padding">
            <div class="header">
              <h3 class="title">Log In</h3>
            </div>
            <div class="content">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-fill btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default { }
</script>

<style>
.auth {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.longer {
  min-height: 350px !important;
}

.padding {
  padding: 50px;
}
</style>
