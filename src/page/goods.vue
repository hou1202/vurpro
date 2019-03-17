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

    </div>
    
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'

    export default {
        name: "goods",
        data() {
            return {
                Details: [],
                swiperBanner: {
                    slidesPerView: "auto",
                    loop: true,
                    autoplay: true,
                },

            }
        },
        components: {
            HeaderTitle
        },
        created() {
            this.axios.get(this.httpConfig.ApiGoodsDetail+'11')
                .then( config => {
                    console.log(config);
                    this.Details = config.data.detail;
                })
                .catch( error => {
                    console.log(error);
                })
        }
    }
</script>

<style scoped>
    .goods-banner .swiper-slide img{
        width:100%;
        height:100vm;
        border-radius:0.2rem;
    }
    .goods-title {
        padding:0 0.6rem;
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


</style>