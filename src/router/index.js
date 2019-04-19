import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Classify from '@/page/classify'
import Goods from '@/page/goods'
import GoodsClassifyList from '@/page/goodsClassifyList'
import Cart from '@/page/cart'
import Balance from '@/page/balance'
import choiceAddress from '@/page/choiceAddress'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',                            //首页
          name: 'Layout',
          component: Layout,
      },
      {
          path: '/classify',                    //分类列表
          name: 'Classify',
          component: Classify
      },
      {
          path: '/goods/:id',                   //产品详情
          name: 'Goods',
          component: Goods,
          props:true,
      },
      {
          path: '/goodsClassifyList/:id',       //分类产品列表
          name: 'GoodsClassifyList',
          component: GoodsClassifyList,
          props:true,
      },
      {
          path: '/cart',                        //购物车
          name: 'Cart',
          component: Cart,
      },
      {
          path: '/Balance',                     //订单结算
          name: 'Balance',
          component: Balance,

      },
      {
          path: '/choiceAddress',               //地址选择
          name: 'choiceAddress',
          component: choiceAddress,
      },
  ]
})
