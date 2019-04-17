/**
 * Created by Administrator on 2019/3/29.
 */
import axios from 'axios'

const state = {
    cartProductsList:[],
    totalProduct: 0.00,
    allSelect: false,
};
const getters = {

    //获取购物车产品列表
    getProductsList:state => state.cartProductsList,

    /**
     * 获取指定购物车产品数据
     * param    id  number  产品ID
     * */
    getProductItem:(state) => (id) => {
        return state.cartProductsList.find(product => product.id === id)
    },
    //获取选中购物车产品列表
    getTradeProductItem:(state) => {
        console.log('132');
        console.log(state.cartProductsList);
        return state.cartProductsList.filter(product => product.state === true);
    },
    //计算选中产品总价格
    productsTotal:(state) => {
        let total = 0.00;
        for(let i=0; i < state.cartProductsList.length;i++){
            if(state.cartProductsList[i].state === true){
                total += state.cartProductsList[i].num*state.cartProductsList[i].price;
            }
        }
        return total;
    },



};
const actions = {
    /**
     * 选择购物产品
     * param     id   number  购物产品索引，>=0为产品ID，-1为全选*/
    setCartProductsState({state}, id) {
        let objStatus = false;
        if(id > 0){
            /** id索引为ID
             * 设置指定ID产品的选中状态
             * */
            state.cartProductsList.find(obj => obj.id === id).state = !state.cartProductsList.find(obj => obj.id === id).state;

            //判断全选状态
            for(let i=0; i< state.cartProductsList.length;i++) {
                if(state.cartProductsList[i].state === true) {
                    objStatus = true;
                }else{
                    objStatus = false;
                    break;
                }
            }
        }else if(id < 0){
            if(state.allSelect === true){
                objStatus = false;
            }else if(state.allSelect === false) {
                objStatus = true;
            }

            for(let h=0; h< state.cartProductsList.length;h++) {
                state.cartProductsList[h].state = objStatus
            }
        }
        state.allSelect = objStatus;

        //调用计算产品总价
        this.commit('ShoppingCart/productsPriceTotal');

    },

    /**
     * 获取购物车产品数据
     * rootState    根state
     * */
    getShoppingCartData({commit, rootState}){
        //rootState代表根state
        axios.get(rootState.Api.ApiShoppingCartList+rootState.UserInfo.userId).then( res => {
            commit('setShoppingCartData',res.data);
        })
    },

    /**设置购物车产品数量*/
    setCartProductsNum({commit, getters}, data) {
        if(data.type === 'reduce' && getters.getProductItem(data.id).num > 1){
            getters.getProductItem(data.id).num -= 1;

        }else if(data.type === 'increase' && parseInt(getters.getProductItem(data.id).num) < parseInt(getters.getProductItem(data.id).stock)) {
            getters.getProductItem(data.id).num = parseInt(getters.getProductItem(data.id).num)+1;

        }else if(data.num){
            getters.getProductItem(data.id).num = data.num;
        }
        //commit('productsPriceTotal');
    },

    //初始化购物车
    setInitCart({state, dispatch}) {

        //有缓存数据直接读取缓存数据
        if(state.cartProductsList.length === 0) {
            state.allSelect = false;
            state.totalProduct = 0.00;
            dispatch('getShoppingCartData');
        }
        //dispatch('getShoppingCartData');

    }
};
const mutations = {
    //设置购物车产品数据
    setShoppingCartData(state, data) {
        state.cartProductsList = data;
    },

    //计算购物车选中产品总价
    productsPriceTotal(state) {
        let total = 0.00;
        for(let i=0; i< state.cartProductsList.length;i++){
            if(state.cartProductsList[i].state === true){
                total += state.cartProductsList[i].num*state.cartProductsList[i].price;
            }
        }
        state.totalProduct = total;
    },

};


export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}