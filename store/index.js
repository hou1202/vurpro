/**
 * Created by Administrator on 2019/3/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import publicModule from './modules/publicModule'
import UserInfo from './modules/UserInfo'
import TipsModule from './modules/TipsModule'
import SelectGoodsSpec from './modules/selectGoodsSpec'
import ShoppingCart from './modules/ShoppingCart'
import testM from './modules/testM'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        //模块名称
        publicModule,       //公共模块
        UserInfo,           //登录用户信息
        TipsModule,         //弹窗提示层模块
        SelectGoodsSpec,    //产品详情页，规格选择模块
        ShoppingCart,       //购物车产品
        testM
    },
    //strict:使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。默认值: false
    strict: false,
})