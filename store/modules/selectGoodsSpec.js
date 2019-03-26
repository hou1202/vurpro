/**
 * Created by Administrator on 2019/3/25.
 */
const state = {
    id:'',
    title: '',
    thumbnail: '',
    price: '',
    stock: '',
    num: {
        type: Number,
        default: 1,
    },
    spec_id: '',

    specStatus: false,          //面板状态
    specType: '',               //打开面板类型

};


const mutations = {
    //设置切换购物产品规格信息
    setGoodsSpec(state, data) {
        state.price = data.price;
        state.stock = data.stock;
        state.num = 1;
        state.spec_id = data.spec_id;
    },
    //设置购物产品基本信息
    setGoodsBaseInfo(state, data) {
        state.id = data.id;
        state.title = data.title;
        state.thumbnail = data.thumbnail;
        state.price = data.price;
        state.stock = data.stock;
        state.num = 1;
        state.spec_id = data.spec_id;
    },
    //设置购物产品数量
    setGoodsNum(state, data){
        if(data.type === 'increase'){
            state.num++;
        }else if(data.type === 'reduce') {
            state.num--;
        }else if(data.num) {
            state.num = data.num;
        }
    },
    //设置规格面板状态
    setSpecStatus(state) {
        state.specStatus = !state.specStatus;
    },

    //设置规格面板打开类型:car=>加入购物车；buy=>立即购买
    setSpecType(state,type) {
        if(type === 'car' || type === 'buy') {
            state.specType = type;
        }else{
            state.specType = '';
        }

    }

};

export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations
}