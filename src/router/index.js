import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Classify from '@/page/classify'
import Goods from '@/page/goods'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Layout',
          component: Layout,
      },
      {
          path: '/classify',
          name: 'Classify',
          component: Classify
      },
      {
          path: '/goods',
          name: 'Goods',
          component: Goods
      },
  ]
})
