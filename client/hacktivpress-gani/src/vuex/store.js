import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  articles: []
}

const mutations = {
}

const actions = {
  getAllArticles ({commit}) {
    http.get('/articles')
    .then(response1 => {
      http.get(response2 => {
        console.log('data artikel di actions ', response1.data)
      })
    })
  }
}
