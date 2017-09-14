import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ArticleList from '@/components/articleList'
import Signin from '@/components/signin'
import Signup from '@/components/signup'
import CreateArticle from '@/components/createarticle'
import DetailArticle from '@/components/detailarticle'

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
          path: '/detail-article/:id',
          component: DetailArticle,
          props: true
        },
        {
          path: '/signin',
          component: Signin
        },
        {
          path: '/signup',
          component: Signup
        },
        {
          path: '/create-article',
          component: CreateArticle
        }
      ]
    }
  ]
})
