<template>
    <div>
        <HeaderTitle title="产品列表" />

        <div class="classify">
            <swiper :options="swiperClassify">
                <swiper-slide v-for="(item, index) in classify" :key="index">
                    <p class="classify-p" :class="{'p-active' : (classify.length == (index+1))}" @click="changeClassify(item.id)">{{item.title}}</p>
                </swiper-slide>
            </swiper>
        </div>

        <GoodsList :goods="goods" />

    </div>
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'
    import GoodsList from '../components/GoodsList.vue'
    export default {
        name: 'goodsClassifyList',
        data() {
            return {
                goods: [],
                classify: [],
                classifyId: '',
                swiperClassify: {     //分类导航swiper配置项
                    slidesPerView: "auto",
                    loop: false,
                    autoplay: false,
                    freeMode:true,
                    freeModeMomentum:false,
                },
            }
        },
        props:['id'],
        components: {
            HeaderTitle,
            GoodsList,
        },
        created() {
            this.axios.get(this.$apiConfig.ApiClassify + this.id)
                .then(config => {
                    this.classify = config.data;
                    this.classifyId = this.classify[0]['id'];
                })
                .catch(error => {
                    console.log(error);
                });
        },
        watch:{
            classifyId () {
                this.axios.get(this.$apiConfig.ApiGoodsClassifyList + this.classifyId + '/0/20')
                    .then(config => {
                        this.goods = config.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        methods: {
            changeClassify(id){
                this.classifyId = id;
            }
        }
    }
</script>

<style scoped>
    .swiper-slide {
        width:fit-content;
        width:-webkit-fit-content;
        width:-moz-fit-content;
    }
    .classify {
        height:1.2rem;
        line-height:1.2rem;
        padding:0.2rem;
        border-top:1px solid #d67733;
    }
    .classify .classify-p{
        height:0.8rem;
        line-height:0.8rem;
        padding:0 0.6rem;
        font-size:0.34rem;
        color:#cc5116;
        border-right:1px solid #d6bb87;
    }
    .classify .p-active{
        border:none;
    }

</style>