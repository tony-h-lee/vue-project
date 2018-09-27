import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/hacker-news',
      name: 'HackerNewsPage',
      component: () => import(/* webpackChunkName: "HackerNews" */ './views/HackerNewsPage.vue')
    },
    {
      path: '/news/:id',
      name: 'NewsItemPage',
      component: () => import(/* webpackChunkName: "NewsItem" */ './views/NewsItemPage.vue')
    }
  ]
})
