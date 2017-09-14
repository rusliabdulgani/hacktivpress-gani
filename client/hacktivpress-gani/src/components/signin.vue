<template lang="html">
  <div class="container" id="form">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputEmail" class="col-lg-2 control-label">Email</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="inputEmail" placeholder="Email" v-model="email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword" class="col-lg-2 control-label">Password</label>
              <div class="col-lg-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password">
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary" @click.prevent="signin">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  #form {
    padding-top: 40px;
  }
</style>
