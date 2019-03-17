<template>
    <div>
        <swiper :options="swiperGoodsList">
            <swiper-slide v-for="(item, index) in snatchList" :key="index">
                <a href="#" class="sm-list">
                    <img src="../assets/goods.jpg">
                    <p>小米MIX9最新款旗舰手机震撼上市</p>
                    <span>￥2010</span>
                    <span>￥2250</span>
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "SwiperGoodsList",
        data() {
            return {
                snatchList: [1,2,3,4,5,6],
                swiperGoodsList: {     //swiper配置项
                    slidesPerView: "auto",
                    freeMode:true,
                    freeModeMomentum:false,
                },
            }
        }
    }
</script>

<style scoped>
    .swiper-slide {
        width:2.8rem;
    }
    .sm-list {
        display:block;      /*a标签用*/
        width:2.6rem;
        height:3.4rem;
        color:#4A4A4A;
        font-size:0.28rem;
        padding:0.12rem;
        border:1px solid #ccc;
        border-radius:0.12rem;
        margin:0 0.12rem;
    }
    .sm-list img {
        width:2.32rem;
        height:2.32rem;
        border-radius:0.12rem;
    }
    .sm-list p{
        height:0.4rem;
        line-height:0.4rem;
        font-size:0.28rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .sm-list span {
        max-width:1.14rem;
        line-height:0.4rem;
        float:left;
        font-size:0.26666666rem;
        color: #cc5116;

        overflow: hidden;
        white-space: nowrap;
    }
    .sm-list span:last-child {
        float:right;
        font-size:0.24rem;
        color: #949494;
    }

</style>