import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Classify from '@/page/classify'
import Goods from '@/page/goods'
import GoodsClassifyList from '@/page/goodsClassifyList'
import Cart from '@/page/cart'

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
          path: '/goods/:id',
          name: 'Goods',
          component: Goods,
          props:true,
      },
      {
          path: '/goodsClassifyList/:id',
          name: 'GoodsClassifyList',
          component: GoodsClassifyList,
          props:true,
      },
      {
          path: '/cart',
          name: 'Cart',
          component: Cart,
      },
  ]
})
