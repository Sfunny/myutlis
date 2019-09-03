import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/views/articleList'
import articleItem from '@/views/articleItem'
import column from '@/components/column'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/articleItem',
      name: 'articleItem',
      component: articleItem
    },
    {
      path: '/column',
      name: 'column',
      component: column
    }
  ]
})
