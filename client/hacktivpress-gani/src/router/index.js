import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ArticleList from '@/components/articleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: ArticleList
        }
      ]
    }
  ]
})
