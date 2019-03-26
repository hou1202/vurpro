/**
 * Created by Administrator on 2019/3/14.
 */
const ApiBaseUrl = 'http://www.aoogi.com';                      //定义了Axiosr的全局配置Axios.defaults.baseURL，这里可以不用定义
const config = {
    ApiBannerList: '/api/index/banner',                         //首页Banner图
    ApiRecomList: '/api/index/recom',                           //首页图文推荐
    ApiIndexGoodsList: '/api/index/indexGoods',                 //首页产品列表
    ApiGoodsDetail: '/api/index/goods/',                        //产品详情,param: id
    ApiGoodsSpec: '/api/index/goodsSpec/',                      //产品详情,param: goods_id
};

export default config;
