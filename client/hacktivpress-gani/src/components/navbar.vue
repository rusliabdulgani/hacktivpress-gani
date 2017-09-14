<template lang="html">
  <div>
    <nav class="navbar navbar-default" id="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">Hacktivpress</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Categories <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
              </ul>
            </li>
            <li><a href="#" class="btn btn-info btn-xs">Create New Article</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/signin">Sign in</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  #navbar {
    border-radius: 0px;
  }
</style>
