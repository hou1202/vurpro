<template>
    <div>
        <HeaderTitle title="产品详情"/>

        <div class="goods-banner">
            <swiper :options="swiperBanner">
                <swiper-slide v-for="(item, index) in Details.banner" :key="index">
                    <img :src="item">
                </swiper-slide>
            </swiper>
        </div>

        <div class="goods-title">
            <h2>{{Details.title}}</h2>
            <p>{{Details.info}}</p>
            <span>￥{{Details.sell_price}}</span>
            <span>￥{{Details.origin_price}}</span>
        </div>

        <div class="goods-info">
            <p>发货地：{{Details.address}}</p>
            <p>销量：{{Details.volume}}</p>
            <p>邮费：{{Details.franking}}</p>
            <div class="info-icon">
                <div><img src="../assets/goods-icon-1.png" alt="" /></div>
                <div><img src="../assets/goods-icon-2.png" alt="" /></div>
                <div><img src="../assets/goods-icon-3.png" alt="" /></div>
                <div><img src="../assets/goods-icon-4.png" alt="" /></div>
            </div>
        </div>

        <div class="goods-param" >
            <div class="param-title">
                <h2>参数规格</h2>
                <i :class="{'param-icon-close': paramOpen}"  @click="ParamClick"></i>
            </div>
            <div class="param-info" v-show="paramOpen">
                <p v-for="(item, index) in Params" :key="index">{{item.p_key}} : {{item.p_value}}</p>
            </div>
        </div>

        <SwiperGoodsList />

        <div class="goods-content">
            <div class="content-title">
                <h2 :class="{'title-active': conActive}" @click="contentClick" id="content">产品详情</h2>
                <h2 :class="{'title-active': comActive}" @click="contentClick" id="comment">产品评论</h2>
            </div>
            <div class="content-swiper">
                <swiper :options="swiperContent" ref="sContent">
                    <!--产品详情-->
                    <swiper-slide>
                        <div v-html="Details.content" class="content-detail"></div>
                    </swiper-slide>
                    <!--产品评论-->
                    <swiper-slide>
                        <div class="content-comment" v-for="item in Comment">
                            <div class="comment-header">
                                <div class="header-portrait">
                                    <img src="../assets/goods.jpg" alt="" />
                                </div>
                                <div class="header-account">
                                    <p>我们是一标题</p>
                                    <p>2019-04-11 12:45:28</p>
                                </div>
                                <div class="header-fabulous">
                                    <i :class="[{'agree_active': isAgree}, 'agree']" @click="agreeClick"></i>
                                    <p>123</p>
                                </div>
                            </div>
                            <div class="comment-info">
                                <p>本例演示如何设置元素的形状。此元素被剪裁到这个形状内，并显示出来。本例演示如何设置元素的形状。此元素被剪裁到这个形状内，并显示出来。本例演示如何设置元素的形状。此元素被剪裁到这个形状内，并显示出来。</p>
                                <div class="info-img">
                                    <img src="../assets/goods.jpg" alt="" />
                                    <img src="../assets/goods.jpg" alt="" />
                                    <img src="../assets/goods.jpg" alt="" />
                                    <img src="../assets/goods.jpg" alt="" />
                                    <img src="../assets/goods.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>

    </div>
    
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'
    import SwiperGoodsList from '../components/SwiperGoodsList'

    export default {
        name: "goods",
        data() {
            return {
                Details: [],
                Params: [],
                paramOpen:false,
                Comment: [1,2,3,4,5],
                isAgree:false,
                conActive: true,
                comActive: false,
                swiperBanner: {
                    slidesPerView: "auto",
                    loop: true,
                    autoplay: true,
                },
                swiperContent: {
                    slidesPerView: "auto",
                    loop: false,
                    autoplay: false,
                    autoHeight:true,
                    on:{
                        slideChangeTransitionEnd() {
                            if(this.activeIndex === 0) {
                                console.log(this.conActive);
                                console.log(this.activeIndex);
                                this.conActive = true;
                                this.comActive = false;
                            }
                            if(this.activeIndex === 1) {
                                console.log(this.conActive);
                                console.log(this.activeIndex);
                                this.comActive = true;
                                this.conActive = false;
                            }
                        }
                    }
                },

            }
        },
        components: {
            HeaderTitle,
            SwiperGoodsList
        },
        created() {
            this.axios.get(this.httpConfig.ApiGoodsDetail+'18')
                .then( config => {
                    console.log(config);
                    this.Details = config.data.detail;
                    this.Params = config.data.params;
                })
                .catch( error => {
                    console.log(error);
                })
        },
        computed: {
            ContentSwiper() {   //相当于建立实例点
                return this.$refs.sContent.swiper
            }
        },
        methods:{
            ParamClick() {
                this.paramOpen = !this.paramOpen;
            },
            agreeClick(event) {
                this.event.siblings().removeClass('title-active');
                this.event.addClass('title-active');
            },
            contentClick(event) {
                console.log(event);
                if(event.originalTarget.id === 'content'){
                    console.log(event.originalTarget.id);

                    this.ContentSwiper.slideTo(0);
                }
                if(event.originalTarget.id === 'comment'){
                    this.ContentSwiper.slideTo(1);
                }

            }
        },
    }
</script>

<style scoped>
    .goods-banner .swiper-slide img{
        width:100%;
        height:100vm;
        border-radius:0.2rem;
    }
    /*产品标题*/
    .goods-title {
        padding:0 0.6rem;
        overflow: hidden;
    }
    .goods-title h2{
        width:100%;
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.32rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;

    }
    .goods-title p{
        width:100%;
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.3rem;
        padding-left: 0.2rem;
        color:#949494;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .goods-title span {
        width:49%;
        height:0.6rem;
        line-height:0.6rem;
        float:left;
        padding: 0 0.2rem;
        font-size:0.34rem;
        color:#cc5116;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;

    }
    .goods-title span:last-child {
        font-size:0.3rem;
        color:#949494;
        text-decoration:line-through;
        text-align:center;
    }
    /*产品信息及图标*/
    .goods-info {
        width:100%;
        overflow: hidden;
        padding:0.2rem 0.6rem;
        border-top:1px solid #ccc;
        margin-top:0.12rem;

    }
    .goods-info p {
        width:33.33%;
        height:0.4rem;
        text-align:center;
        float:left;
        font-size:0.28rem;
        color:#949494;
    }
    .goods-info .info-icon {
        padding:0.2rem 0.6rem;
        height:1.1rem;
        overflow: hidden;
    }
    .goods-info .info-icon div{
        width:25%;
        float:left;
        text-align:center;
    }
    .goods-info .info-icon img{
        width:0.7rem;
    }
    /*产品参数*/
    .goods-param {
        padding:0 0.6rem 0.5rem 0.6rem;

    }
    .goods-param .param-title{
        position:relative;
        overflow: hidden;
        height:0.8rem;
        line-height:0.8rem;
        border-bottom:1px solid #e2e2e2;
    }
    .goods-param .param-title h2{
        width:2rem;

        font-size:0.33333333rem;
        letter-spacing: 0.08rem;
        float:left;
    }
    .goods-param .param-title i{
        display: block;
        width:0.6rem;
        height:0.6rem;
        float:right;
        background:url(../assets/direct-down.png) no-repeat center center;
        background-size:0.48rem;
    }
    .goods-param .param-title .param-icon-close {
        -moz-transform:rotate(180deg);
        -webkit-transform:rotate(180deg);
        transform:rotate(180deg);
    }
    .goods-param .param-info {
        padding:0.2rem 0.4rem;
    }
    .goods-param .param-info p {
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.32rem;
        color:#949494;
        letter-spacing: 0.04rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    /*产品详情*/
    .goods-content {
        margin: 0.6rem 0 ;
        overflow: hidden;
    }
    .goods-content .content-title{
        overflow: hidden;
    }
    .goods-content .content-title h2{
        width:50%;
        float:left;
        height:1.2rem;
        line-height: 1.2rem;
        text-align:center;
        font-size:0.34rem;
        background: rgba(252, 243, 246, 0.6);
        letter-spacing: 0.1rem;
        border-top:1px solid #dfd7da;
        border-bottom:1px solid #dfd7da;
    }
    .goods-content .content-title .title-active {
        border-top:1px solid #cc5116;
        border-bottom:1px solid #cc5116;
        color: #cc5116;
        font-weight:600;
    }
    .goods-content .content-swiper{
        overflow: hidden;
        padding:0.6rem 0;
    }
    .goods-content .content-swiper .content-detail>>>img{
        width:100%;
    }
    /*产品评论*/
    .content-comment {
        padding:0.4rem 0.6rem;
        border-bottom:1px solid #dcdcdc;
    }
    .content-comment:last-child {
        border:none;
    }
    .content-comment .comment-header {
        overflow: hidden;
        border-bottom:1px solid #e9e9e9;
    }
    .content-comment .comment-header div {
        height:1.1rem;
        float:left;
    }
    .content-comment .comment-header .header-portrait{
        width:13%;
    }
    .content-comment .comment-header .header-portrait img {
        width:1rem;
        border-radius:15rem;
    }
    .content-comment .comment-header .header-account {
        width:76%;
        padding:0 0.3rem;
    }
    .content-comment .comment-header .header-account p{
        height:0.5rem;
        line-height:0.5rem;
        font-size:0.32rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .content-comment .comment-header .header-account p:last-child{
        color:#949494;
        font-size:0.3rem;
    }
    .content-comment .comment-header .header-fabulous {
        width:10%;
        text-align:center;
    }
    .content-comment .comment-header .header-fabulous i{
        display:block;
        width:0.7rem;
        height:0.7rem;
        margin:0 auto;
    }
    i.agree {
        background:url(../assets/agree.png) no-repeat center center;
        background-size:0.5rem;
    }
    i.agree_active {
        background:url(../assets/agree-true.png) no-repeat center center;
        background-size:0.5rem;
    }
    .content-comment .comment-header .header-fabulous p{
        height:0.3rem;
        font-size:0.3rem;
    }
    .content-comment .comment-info {
        padding:0.2rem;
    }
    .content-comment .comment-info p {
        font-size:0.32rem;
        line-height:0.5rem;
        color: #373737;
    }
    .content-comment .comment-info .info-img {
        padding-top:0.2rem;
    }
    .content-comment .comment-info .info-img img {
        width:1.5rem;
        height:1.5rem;
        border-radius:0.2rem;
    }


</style>