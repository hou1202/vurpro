<template>
    <div class="cart-list-swiper">
        <swiper :options="CartOption" ref="CartSwiper" >
            <!-- slides -->
            <swiper-slide>
                <div class="cart-list-box">
                    <div class="cart-list-box-left">
                        <i
                            :class="{ 'active-cart' : selectActive }"
                            @click="selectCartGoods"></i>
                    </div>
                    <div class="cart-list-box-img">
                        <img :src="goods.thumbnail" />
                    </div>
                    <div class="cart-list-box-right">
                        <h2>{{goods.title}}</h2>
                        <div class="cart-list-box-right-param">
                            <p>￥{{goods.price}}</p>
                            <p>{{goods.name}}</p>
                        </div>
                        <p class="param-stock">库存： {{goods.stock}}</p>
                        <div class="cart-list-box-right-num">
                            <i></i>
                            <input type="number" v-model="buyNum" />
                            <i></i>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="cart-list-del">
                    <p>删除</p>
                </div>
            </swiper-slide>
        </swiper>


    </div>
</template>

<script>
    import { mapState, mapGetters} from 'vuex'
    export default {
        name: 'ShoppingCart',
        props:['goods', 'id'],
        data() {
            return {
                buyNum:1,
                CartOption: {
                    slidesPerView: "auto",
                    loop: false,
                    autoplay: false,
                    freeMode:true,
                    freeModeMomentum:false,
                }
            }
        },
        created() {
            this.buyNum = this.goods.num;
        },
        methods: {
            /**
             * 监听输入购物产品数量
             * */
            watchNum(){
                if(this.buyNum < 1){
                    this.$store.commit('TipsModule/showTips',{content:'已经不能再少了'});
                    this.$store.commit('SelectGoodsSpec/setGoodsNum',{num:1});
                    this.buyNum = 1;
                } else if (parseInt(this.buyNum) > parseInt(this.$store.state.SelectGoodsSpec.stock)){
                    this.$store.commit('TipsModule/showTips',{content:'已经不能再多了'});
                    this.$store.commit('SelectGoodsSpec/setGoodsNum',{num:this.$store.state.SelectGoodsSpec.stock});
                    this.buyNum = parseInt(this.$store.state.SelectGoodsSpec.stock);
                } else {
                    this.$store.commit('SelectGoodsSpec/setGoodsNum',{num:this.buyNum});
                }
            },
            //选择购物车产品
            selectCartGoods() {
                this.$store.dispatch('ShoppingCart/setCartProductsState',this.id);
                /*this.selectActive = this.$store.state.ShoppingCart.item.find(pro => pro.id === this.id).state;*/
            }
        },
        computed: {
            ...mapGetters('ShoppingCart',{
                getProductState: 'getProductState',
            }),
            selectActive() {
                return this.getProductState(this.id);
            }


        },
        watch:{
            //监听产品选择状态
            selectActive:{
                handler:function(val) {
                    return val;
                },
                deep:true
            },


        }


    }
</script>

<style scoped>
    .swiper-slide {
        width:fit-content;
        width:-webkit-fit-content;
        width:-moz-fit-content;
    }
    .cart-list-swiper {
        width:100%;
        max-width:14rem;
        height:3rem;
        background:#fff;
        border-radius:0.2rem;
        margin:0 auto;
        margin-bottom: 0.4rem;
    }
    .cart-list-box {
        overflow: hidden;
    }
    .cart-list-box div {
        float:left;
    }
    .cart-list-box .cart-list-box-left {
        width:1rem;
    }
    .cart-list-box .cart-list-box-left i {
        display:block;
        width:0.6rem;
        height:3rem;
        margin:0 auto;
        background:url(../assets/circle.png) no-repeat center center;
        background-size:0.4rem;
    }
    .cart-list-box .cart-list-box-left i.active-cart {
        background:url(../assets/circle-active.png) no-repeat center center;
        background-size:0.4rem;
    }
    .cart-list-box .cart-list-box-img{
        width:2.6rem;
        text-align:center;
        padding:0.5rem 0;
    }
    .cart-list-box .cart-list-box-img img {
        width:2rem;
        height:2rem;
        border-radius:0.2rem;
    }
    .cart-list-box .cart-list-box-right {
        width:calc(100% - 4.2rem);
        min-width:5.5rem;
        padding:0.3rem 0.4rem 0.2rem 0;
    }
    .cart-list-box .cart-list-box-right h2 {
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.34rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-param {
        width:100%;
        overflow: hidden;
    }
    .cart-list-box .cart-list-box-right p {
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
    .cart-list-box .cart-list-box-right .cart-list-box-right-param p{
        float:left;
        width:48%;
        padding-right:0.2rem;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-param p:last-child{
        text-align:right;
        float:right;
    }
    .cart-list-box .cart-list-box-right .param-stock{
        width:100%;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-num{
        width:100%;
        height:0.9rem;
        line-height:0.9rem;
        overflow: hidden;
        position:relative;
        text-align:center;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-num input {
        width:1.6rem;
        margin:0 0.2rem;
        height:0.6rem;
        color:#4a4a4a;
        font-size:0.32rem;
        position: relative;
        top:-0.4rem;
        border:none;
        border-bottom: 1px solid #ccc;
        text-align:center;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-num i {
        display:inline-block;
        width:0.4rem;
        height:0.9rem;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-num i:first-child{
        background:url(../assets/increase.png) no-repeat center center;
        background-size:0.4rem;
    }
    .cart-list-box .cart-list-box-right .cart-list-box-right-num i:last-child {
        background:url(../assets/reduce.png) no-repeat center center;
        background-size:0.4rem;
    }
    .cart-list-del {
        height:3rem;
        width:1.6rem;
        padding:0.4rem 0.2rem 0.4rem 0;
    }
    .cart-list-del p {
        width:1.2rem;
        height:2.2rem;
        line-height:2rem;
        font-size:0.34rem;
        text-align:center;
        background:#cc7f15;
        color:#fff;
        letter-spacing: 0.04rem;
        border-radius:0.2rem;
        float:right;

    }
</style>