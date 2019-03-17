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
            this.axios.get(this.httpConfig.ApiGoodsDetail+'6')
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

</style>