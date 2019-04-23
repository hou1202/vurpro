/**
 * Created by Administrator on 2019/3/29.
 */
import axios from 'axios'

const state = {
    cartProductsList:[],
    tradeAddressList:[],
    tradeCouponList:[],
    totalProduct: 0.00,
    allSelect: false,
    choiceAddress:0,
    choiceCoupon:0
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
        return state.cartProductsList.filter(product => product.state === true);
    },

    //计算选中产品总价格
    productsTotal:(state) => {
        let total = 0.00;
        state.cartProductsList.filter(function(obj){
            if(obj.state === true){
                total += obj.num*obj.price;
            }
        });
        return total;
    },

    //计算运算总金额
    productFranking:(state) => {
        let franking = 0.00;
        state.cartProductsList.filter(function(obj){
            if(obj.state === true){
                franking = parseInt(franking)+parseInt(obj.franking)
            }
        });
        return franking;
    },

    //获取用户选择地址
    getChoiceAddress:(state) => {
        if(state.choiceAddress == 0){
            return false;
        }
        return state.tradeAddressList.find(obj =>obj.id === state.choiceAddress);
    }

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

    /**
     * 获取用户地址信息
     * */
    getTradeAddressData({commit, rootState}){
        axios.get(rootState.Api.ApiTradeAddress+rootState.UserInfo.userId).then( res => {
            commit('setTradeAddressData',res.data);
        })
    },

    /**
     * 获取用户优惠券信息
     * */
    getTradeCouponData({commit, state, rootState}){
        let couponProduct = [];
        state.cartProductsList.filter(function(obj){
            if(obj.state === true){
                couponProduct.push(obj.id)
            }
        });
        axios.get(rootState.Api.ApiTradeCoupon+rootState.UserInfo.userId,{
            param: {
                goods_list:couponProduct,
            }
        }).then( res => {
           // commit('setTradeAddressData',res.data);
            console.log(res.data);
        })
    },

    /**
     * 设置购物车产品数量
     * */
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
            //state.totalProduct = 0.00;
            dispatch('getShoppingCartData');
        }
        //复位地址信息
        state.choiceAddress = 0;
        //dispatch('getShoppingCartData');

    },

    //初始化订单结算
    setInitBalance({state, dispatch}) {

        //有缓存数据直接读取缓存数据
        if(state.tradeAddressList.length === 0 || state.choiceAddress === 0) {
            dispatch('getTradeAddressData');
        }
        //dispatch('getShoppingCartData');

    },

    //初始化选择优惠券
    setInitCoupon({state, dispatch}) {

        //有缓存数据直接读取缓存数据
        if(state.tradeCouponList.length === 0) {
            state.choiceCoupon = 0;
            dispatch('getTradeCouponData');
        }
    },
};
const mutations = {
    //设置购物车产品数据
    setShoppingCartData(state, data) {
        state.cartProductsList = data;
    },
    //设置用户地址数据
    setTradeAddressData(state, data) {
        state.tradeAddressList = data;
        state.choiceAddress = state.tradeAddressList.find(obj => obj.choice == 1).id;

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

    //设置选择地址
    setChoiceAddress(state, data) {
        state.choiceAddress = data.id;
    }

};


export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}