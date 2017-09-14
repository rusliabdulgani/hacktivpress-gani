<template lang="html">
  <div class="container" id="form">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Title</label>
              <div>
                <input type="text" class="form-control" id="inputEmail" v-model="title">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Category</label>
              <div>
                <input type="text" class="form-control" id="inputEmail" v-model="title">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Content</label>
              <div>
                <textarea class="form-control" rows="3" id="textArea" v-model="content"></textarea>
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

<style lang="css">
</style>
