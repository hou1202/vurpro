/**
 * Created by Administrator on 2019/3/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
    import createPersistedState from 'vuex-persistedstate'
import publicModule from './modules/publicModule'
import Api from './modules/apiConf'
import UserInfo from './modules/UserInfo'
import TipsModule from './modules/TipsModule'
import SelectGoodsSpec from './modules/selectGoodsSpec'
import ShoppingCart from './modules/ShoppingCart'

Vue.use(Vuex);

const localPersisted = new createPersistedState({
    key: 'localPersisted',
    storage: window.localStorage,
    reducer: (state) => ({
        /*ShoppingCart:{
            cartProductsList:state.ShoppingCart.cartProductsList,
            totalProduct:state.ShoppingCart.totalProduct,
            tradeAddressList:state.ShoppingCart.tradeAddressList,
        },*/

    }),
});
const sessionPersisted = new createPersistedState({
    key: 'sessionPersisted',
    storage: window.sessionStorage,
    reducer: (state) => ({
        ShoppingCart:{
            cartProductsList:state.ShoppingCart.cartProductsList,
            totalProduct:state.ShoppingCart.totalProduct,
            tradeAddressList:state.ShoppingCart.tradeAddressList,
        },

    }),
});

export default new Vuex.Store({
    modules: {
        //模块名称
        publicModule,       //公共模块
        UserInfo,           //登录用户信息
        TipsModule,         //弹窗提示层模块
        SelectGoodsSpec,    //产品详情页，规格选择模块
        ShoppingCart,       //购物车产品
        Api
    },
    //strict:使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。默认值: false
    strict: false,
    //持久化存储
    plugins:[localPersisted,sessionPersisted]
    /*plugins:[vuexPersistedState({
        storage:window.localStorage,    //默认值为localStorage
        /!*reducer:val => {
            return {
                cartProductsList:val.ShoppingCart.cartProductsList,
                totalProduct:val.ShoppingCart.totalProduct,
            }
        }*!/

    })],*/
})