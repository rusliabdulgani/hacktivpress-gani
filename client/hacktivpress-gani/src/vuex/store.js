import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: [],
  articleById: {}
}

const mutations = {
  setAllArticles (state, payload) {
    console.log('data all articles di mutations ', payload)
    state.articles = payload
  },
  setArticleById (state, payload) {
    state.articleById = payload
  }
}

const actions = {
  getAllArticles ({commit}) {
    http.get('/articles')
    .then(({data}) => {
      console.log('data artikel di actions ', data)
      commit('setAllArticles', data)
    })
  },
  getArticleById ({commit}, articleId) {
    http.get('/articles/' + articleId)
    .then(({data}) => {
      commit('setArticleById', data)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
