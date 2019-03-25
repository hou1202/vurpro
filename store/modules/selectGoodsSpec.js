/**
 * Created by Administrator on 2019/3/25.
 */
const state = {
    id:'',
    title: '',
    thumbnail: '',
    price: '',
    stock: '',
    num: 1,
    spec_id: ''

};


const mutations = {
    setGoodsSpec(state, data) {
        state.price = data.price;
        state.stock = data.stock;
        state.num = data.num;
        state.spec_id = data.spec_id;
    },
    setGoodsBaseInfo(state, data) {
        state.id = data.id;
        state.title = data.title;
        state.thumbnail = data.thumbnail;
        state.price = data.price;
        state.stock = data.stock;
        state.num = 1;
        state.spec_id = data.spec_id;
    }
};

export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations
}