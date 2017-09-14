import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: [],
  articleById: {},
  user: {}
}

const mutations = {
  setAllArticles (state, payload) {
    console.log('data all articles di mutations ', payload)
    state.articles = payload
  },
  setArticleById (state, payload) {
    state.articleById = payload
  },
  deleteArticle (state, payload) {
    const idx = state.articles.findIndex((article) => article.id === payload)
    state.articles.splice(idx, 1)
  },
  saveArticle (state, payload) {
    state.articles.push(payload)
  },
  signin (state, payload) {
    state.user = payload
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
  },
  deleteArticle ({commit}, articleId) {
    http.delete('/articles/' + articleId)
    .then(({data}) => {
      commit('deleteArticle', articleId)
    })
  },
  createArticle ({commit}, newArticle) {
    http.post('/articles', newArticle)
    .then(({data}) => {
      commit('saveArticle', data)
    })
  },
  signin ({commit}, formSignin) {
    http.post('/users/signin', formSignin)
    .then(({data}) => {
      localStorage.setItem('token', JSON.stringify({token: data.token, _id: data._id}))
      commit('signin', data)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
