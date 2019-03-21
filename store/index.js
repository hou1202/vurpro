/**
 * Created by Administrator on 2019/3/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import publicModule from './modules/publicModule'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        //模块名称
        publicModule,
    },
    //strict:使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。默认值: false
    strict: false,
})