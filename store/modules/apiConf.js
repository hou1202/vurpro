/**
 * Created by Administrator on 2019/3/29.
 */



const state = {
    ApiBannerList: '/api/index/banner',                         //首页Banner图
    ApiRecomList: '/api/index/recom',                           //首页图文推荐
    ApiIndexGoodsList: '/api/index/indexGoods',                 //首页产品列表param: page,limit
    ApiGoodsDetail: '/api/index/goods/',                        //产品详情,param: id
    ApiGoodsSpec: '/api/index/goodsSpec/',                      //产品详情,param: goods_id
    ApiClassify: '/api/index/classify/',                        //分类列表
    ApiGoodsClassifyList: '/api/index/goodsClassifyList/',      //产品详情,param: id / page / limit
    ApiShoppingCartList: '/api/index/shoppingCart/',            //购物车产品列表,param: user_id
    ApiTradeAddress: '/api/index/userTradeAddress/',            //购物车产品列表,param: user_id
};

export default {
    //定义modules命名空间
    namespaced: true,
    state,
}