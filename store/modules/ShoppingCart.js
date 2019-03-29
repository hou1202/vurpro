/**
 * Created by Administrator on 2019/3/29.
 */
const state = {
    item:[],
};
const getters = {

};
const actions = {

};
const mutations = {
    setShoppingCartData(state, data) {
        state.item = data;
    }
};

export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}