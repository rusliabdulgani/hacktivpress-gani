<template lang="html">
  <div class="container" id="form">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form @submit.prevent="createArticle(formArticle)" class="form-horizontal" id="login">
          <fieldset>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Title</label>
              <div>
                <input type="text" class="form-control" id="inputEmail" v-model="formArticle.title">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Category</label>
              <div>
                <input type="text" class="form-control" id="inputEmail" v-model="formArticle.category">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail" class="control-label">Content</label>
              <div>
                <textarea class="form-control" rows="3" id="textArea" v-model="formArticle.content"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formArticle: {
        title: '',
        category: '',
        content: '',
        author: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createArticle'
    ]),
    getToken () {
      let token = JSON.parse(localStorage.getItem('token'))
      this.author = token._id
    }
  },
  created () {
    this.getToken()
  }
}
</script>

<style lang="css">
</style>
