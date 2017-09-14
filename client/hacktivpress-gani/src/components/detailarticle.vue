<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6-offset-3">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">{{articleById.title}}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12">
                {{articleById.content}}
              </div>
            </div>
            <div class="row">
              <div class="col-md-2-offset-8">
                <a href="#" class="btn btn-primary btn-xs">Mini button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapState([
      'articleById'
    ])
  },
  methods: {
    ...mapActions([
      'getArticleById'
    ])
  },
  created () {
    this.getArticleById(this.id)
  }
}
</script>

<style lang="css">
</style>
