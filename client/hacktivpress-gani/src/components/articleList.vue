<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="panel panel-default" v-for="article in articles">
          <div class="panel-heading"><h4>{{article.title}}</h4></div>
          <div class="panel-body">
            {{article.content}}
          </div>
          <div class="panel-footer">
            <div class="col-md-2">
              <span id="left">wrote by: <b>{{article.author.name}}</b></span>
            </div>
            <div class="col-md-7"></div>
            <div class="col-md-3">
              <a to="/" class="btn btn-primary btn-xs" @click="deleteArticle(article._id)">delete</a>
              <a class="btn btn-primary btn-xs">edit</a>
              <router-link :to="'/detail-article/' + article._id">detail</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles',
      'deleteArticle'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css" scoped>
  #left {
    display: block;
    text-align: left;
  }
  
  #right {
    display: block;
    text-align: right;
  }
</style>
