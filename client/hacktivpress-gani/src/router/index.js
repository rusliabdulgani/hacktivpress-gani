import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ArticleList from '@/components/articleList'
import Signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: ArticleList
        },
        {
          path: '/signin',
          component: Signin
        }
      ]
    }
  ]
})
