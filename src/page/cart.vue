<template>
    <div class="shopping-cart">
        <div class="cart">
            <p class="cart-header">共计 0 件商品</p>

            <div class="cart-list">
                <!--<swiper :options="swiperBanner">
                    <swiper-slide v-for="(item, index) in Details.banner" :key="index">
                        <img v-lazy="item">
                    </swiper-slide>
                </swiper>-->
                <div class="cart-list-box">
                    <div class="cart-list-box-left">
                        <i class="active-cart"></i>
                    </div>
                    <div class="cart-list-box-img">
                        <img src="../assets/goods.jpg" />
                    </div>
                    <div class="cart-list-box-right">
                        <h2>华为 HUAWEI P20 Pro 全面屏徕卡三摄游戏手机亮黑色 全网通移动联通电信4G手机全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色</h2>
                        <div class="cart-list-box-right-param">
                            <p>￥2520.00</p>
                            <p>6+64G</p>
                        </div>
                        <p class="param-stock">库存： 256</p>
                        <div class="cart-list-box-right-num">
                            <i></i>
                            <input type="number" value="1" />
                            <i></i>
                        </div>
                    </div>
                </div>
            </div>

            <!--购物车为空-->
            <div class="cart-empty" v-if="isEmpty">
                <img src="../assets/null.png">
                <router-link to="/">
                    <button>现在去逛逛吧~~~</button>
                </router-link>
            </div>
        </div>

        <!--底部导航-->
        <Footer />
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        name: 'cart',
        data() {
            return {
                isEmpty:false,
                swiperBanner: {
                    slidesPerView: "auto",
                    loop: true,
                    autoplay: true,
                },
            }
        },
        components: {
            Footer
        },
    }
</script>

<style>
    body, #app{
        height:100%;
    }
    .shopping-cart {
        background: -webkit-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -o-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -moz-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        width:100%;
        height:100%;
        overflow: hidden;
    }
    .shopping-cart .cart {
        height:100%;
        padding:1.4rem 0.4rem 1.8rem 0.4rem;
    }
    .shopping-cart .cart .cart-header{
        height:0.8rem;
        line-height:0.8rem;
        font-size:0.34rem;
        color:#cc7f15;
        letter-spacing: 0.06rem;
        padding-left:1rem;
    }
    .shopping-cart .cart .cart-empty {
        height:100%;
        text-align:center;
        margin-top:3rem;
    }
    .shopping-cart .cart .cart-empty img{
        width:4rem;
    }
    .shopping-cart .cart .cart-empty  a {
        display:block;
        width:100%;
        padding:0.4rem 0;
    }
    .shopping-cart .cart .cart-empty button {
        width:3.6rem;
        height:1rem;
        font-size:0.32rem;
        color:#fff;
        letter-spacing: 0.04rem;
        background: rgba(204, 127, 21, 0.8);
        border:none;
        border-radius:0.12rem;
    }
    .shopping-cart .cart .cart-list {
        margin-top:0.4rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box {
        width:100%;
        max-width:14rem;
        height:3rem;
        background:#fff;
        border-radius:0.2rem;
        margin:0 auto;

    }
    .shopping-cart .cart .cart-list .cart-list-box div {
        float:left;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-left {
        width:1rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-left i {
        display:block;
        width:0.6rem;
        height:3rem;
        margin:0 auto;
        background:url(../assets/circle.png) no-repeat center center;
        background-size:0.4rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-left i.active-cart {
        background:url(../assets/circle-active.png) no-repeat center center;
        background-size:0.4rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-img{
        width:2.6rem;
        text-align:center;
        padding:0.5rem 0;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-img img {
        width:2rem;
        height:2rem;
        border-radius:0.2rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right {
        width:calc(100% - 4.2rem);
        min-width:5.5rem;
        padding:0.3rem 0.4rem 0.2rem 0;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right h2 {
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.34rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-param {
        width:100%;
        overflow: hidden;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right p {
        height:0.5rem;
        line-height:0.5rem;
        font-size:0.32rem;
        color:#cc7f15;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-param p{
        float:left;
        width:48%;
        padding-right:0.2rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-param p:last-child{
        text-align:right;
        float:right;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .param-stock{
        width:100%;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-num{
        width:100%;
        height:0.9rem;
        line-height:0.9rem;
        overflow: hidden;
        position:relative;
        text-align:center;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-num input {
        width:1.6rem;
        margin:0 0.2rem;
        height:0.6rem;
        position: relative;
        top:-0.4rem;
        border:none;
        border-bottom: 1px solid #ccc;
        text-align:center;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-num i {
        display:inline-block;
        width:0.4rem;
        height:0.9rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-num i:first-child{
        background:url(../assets/increase.png) no-repeat center center;
        background-size:0.4rem;
    }
    .shopping-cart .cart .cart-list .cart-list-box .cart-list-box-right .cart-list-box-right-num i:last-child {
        background:url(../assets/reduce.png) no-repeat center center;
        background-size:0.4rem;
    }

</style>