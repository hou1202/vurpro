<template>
    <div>
        <!--banner-头部-->
        <div class="banner">
            <swiper :options="swiperBanner">
                <swiper-slide v-for="(item, index) in bannerList" :key="index">
                    <a href="#">
                        <img :src="item.thumbnail">
                    </a>
                </swiper-slide>
            </swiper>
            <div class="search">
                <input type="text" name="key" placeholder="搜索您想要的产品" />
                <i id="searchSubmit"></i>
            </div>
        </div>

        <!--nav-导航-->
        <div class="nav">
            <a href="/">
                <img src="../assets/nav.png" alt="">
                <p>华为手机</p>
            </a>
            <a href="#">
                <img src="../assets/nav.png" alt="">
                <p>华为手机</p>
            </a>
            <a href="#">
                <img src="../assets/nav.png" alt="">
                <p>华为手机</p>
            </a>
            <a href="#">
                <img src="../assets/nav.png" alt="">
                <p>华为手机</p>
            </a>
        </div>

        <!--抢购产品-->
        <div class="snatch">
            <div class="block-title">
                <h2>限时抢购</h2>
                <div class="count-down">
                    <p>23</p>
                    <p>45</p>
                    <p>25</p>
                </div>
                <a href="#"><i class="open-more"></i></a>
            </div>

            <SwiperGoodsList />

        </div>

        <!--推荐-->
        <div class="recomm" id="recomm">
            <a class="recomm-list" v-for="(item, index) in recommList" :key="index">
                <div :class="['recomm-word', index%2==0 ? 'recomm-right' : '']">
                    <h2>{{item.title}}</h2>
                    <p>{{item.info}}</p>
                    <i></i>
                </div>
                <div class="recomm-img">
                    <img :src="item.thumbnail">
                </div>
            </a>
        </div>

        <!--产品列表-->
        <div class="index-goods">
            <h2 class="index-goods-title"><i class="index-goods-icon-left"></i>热品推荐<i class="index-goods-icon-right"></i></h2>
            <GoodsList :goods="goodsList"/>
        </div>

        <!--底部挤压-->
        <div class="bottom-margin"></div>

        <!--底部导航-->
        <Footer />



    </div>
</template>

<script>
    import GoodsList from '../components/GoodsList.vue'
    import Footer from '../components/Footer.vue'
    import SwiperGoodsList from '../components/SwiperGoodsList'

    export default {
        name: 'layout',
        data() {
            return {
                bannerList: [],
                snatchList: [1,2,3,4,5,6],
                recommList: [],
                goodsList:[],
                swiperBanner: {     //轮播swiper配置项
                    slidesPerView: "auto",
                    loop: true,
                    effect:'coverflow',
                    autoplay: true,
                },
                swiperSnatch: {     //限购swiper配置项
                    slidesPerView: "auto",
                    freeMode:true,
                    freeModeMomentum:false,
                },
            }
        },
        components: {
            GoodsList,
            Footer,
            SwiperGoodsList
        },
        created() {
            this.axios.get(this.$apiConfig.ApiBannerList)
                .then( config => {
                   this.bannerList = config.data;
                })
                .catch( error => {
                    console.log(error);
                });
            this.axios.get(this.$apiConfig.ApiRecomList)
                .then( config => {
                    this.recommList = config.data;
                })
                .catch( error => {
                    console.log(error);
                });
            this.axios.get(this.$apiConfig.ApiIndexGoodsList+'/1/10')
                .then( config => {
                    console.log(config.data);
                    this.goodsList = config.data;
                })
                .catch( error => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .banner {
        padding:0.12rem;
    }
    .banner img {
        width:100%;
        border-radius:0.12rem;
    }
    .search {
        width:100%;
        position:fixed;
        top:0.2rem;
        z-index: 9;
        text-align:center;
    }
    .search input {
        width:6rem;
        height:0.8rem;
        line-height:0.8rem;
        color:#fff;
        letter-spacing: 0.04rem;
        padding:0 0.4rem;
        margin-left:0.8rem;
        font-size:0.32rem;
        border-radius:2rem;
        border:none;
        background: rgba(117, 131, 143, 0.6);

    }
    .search i {
        display:inline-block;
        width:0.6rem;
        height:0.6rem;
        background:url(../assets/search.png) no-repeat center center;
        background-size:0.52rem;
        position: relative;
        top:0.2rem;
        left:-0.88rem
    }

    /*nav-导航*/
    .nav {
        width:100%;
        padding:0.2rem 0.4rem;
        overflow: hidden;
    }
    .nav a{
        display:block;
        width:25%;
        text-align:center;
        color: #4a4a4a;
        font-size:0.32rem;
        float:left;
        padding:0 0.12rem;
    }
    .nav a img{
        padding:0.36rem;
        width:100%;
        border-radius: 50rem;
    }
    .nav p{
        line-height:0.4rem;
        overflow: hidden;
        white-space: nowrap;
    }

    .block-title{
        width:100%;
        display:flex;
        padding:0 0.4rem 0.12rem 0.4rem;
        border-top:0.12rem solid rgba(204,127,21,0.4);
        position: relative;

    }
    .block-title h2 {
        width:2rem;
        height:0.8rem;
        line-height:0.8rem;
        font-size:0.34rem;
        font-weight: 600;
    }
    .block-title a {
        position:absolute;
        right:0.12rem;
    }
    i.open-more{
        display:block;
        width:0.8rem;
        height:0.8rem;
        background:url(/static/images/open-more.png) no-repeat center center;
        background-size:0.48rem;
    }
    .snatch {
        padding:0.24rem;
    }
    .snatch .count-down {
        float:left;
        display:flex;
        align-items: center;
    }
    .snatch .count-down p {
        width:0.6rem;
        height:0.6rem;
        line-height:0.6rem;
        text-align:center;
        color:#fff;
        background: #ff622b;
        border-radius: 0.12rem;
        margin-left: 0.12rem;
    }

    /*图文推荐RECOMM*/
    .recomm {
        display:block;      /*a标签用*/
        padding:0.2rem;
    }
    .recomm .recomm-list {
        display:block;
        overflow: hidden;
        padding:0.2rem 0.4rem;
        border:1px solid #ccc;
        border-radius:0.2rem;
        margin-bottom:0.2rem;
    }
    .recomm .recomm-list .recomm-word,.recomm .recomm-list .recomm-img {
        width:50%;
        height:2.64rem;
        float:left;
    }
    .recomm .recomm-list .recomm-right {
        float:right;
    }
    .recomm .recomm-list .recomm-word h2 {
        height:0.4rem;
        line-height:0.4rem;
        font-size:0.32rem;
        padding:0 0.12rem;
        text-indent: 0.2rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .recomm .recomm-list .recomm-word p{
        height:1.6rem;
        line-height:0.4rem;
        font-size:0.28rem;
        padding:0 0.12rem;
        margin:0.12rem 0;
        text-indent: 0.2rem;
        color:#949494;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .recomm .recomm-list .recomm-word i {
        display:block;
        width:1.4rem;
        height:0.4rem;
        float:right;
        margin-right:0.6rem;
        background:url(../assets/recomm-more.png) no-repeat center center;
        background-size: 1.4rem 0.16rem;
    }
    .recomm .recomm-list .recomm-img img {
        width:100%;
        height:2.64rem;
        border-radius:0.2rem;
    }

    /*产品列表*/
    .index-goods {
        padding:0.2rem;
    }
    .index-goods .index-goods-title {
        height:0.6rem;
        line-height:0.6rem;
        text-align:center;
        color:#cc7f15;
        letter-spacing: 0.12rem;
        font-size:0.36rem;
        font-weight: 600;
        display:flex;
        justify-content:center
    }
    .index-goods i{
        display:block;
        width:0.4rem;
        height:0.4rem;
        margin-top:0.1rem;
    }
    i.index-goods-icon-left{
        background:url(../assets/fire-title-left.png) no-repeat center center;
        background-size:0.4rem;
        margin-right:0.3rem;
    }
    i.index-goods-icon-right{
        background:url(../assets/fire-title-right.png) no-repeat center center;
        background-size:0.4rem;
        margin-left:0.1rem;
    }

</style>