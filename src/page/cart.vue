<template>
    <div class="shopping-cart" :class="{'shopping-cart-empty' : isCartEmpty}">
        <div class="cart">
            <p class="cart-header">共计 {{cartGoodsTotal}} 件商品</p>

            <div class="cart-list">
                <template v-for="(item, index) in cartGoods">
                    <ShoppingCart :goods="item" :id="item.id"/>
                </template>
            </div>

            <div class="cart-total" v-if="!isCartEmpty">
                <i :class="{'total-active' : allSelectStatus}" @click="allProductSelect"></i>
                <div class="total-num">
                    <p>合计： <span>￥{{productsTotal}}</span></p>
                </div>
                <button type="button" @click="cartBalance">结 算</button>
            </div>

            <!--购物车为空-->
            <div class="cart-empty" v-if="isCartEmpty">
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
    import ShoppingCart from '../components/ShoppingCart.vue'
    import { mapState, mapGetters} from 'vuex'
    export default {
        name: 'cart',
        data() {
            return {
                swiperBanner: {
                    slidesPerView: "auto",
                    loop: true,
                    autoplay: true,
                },
            }
        },
        components: {
            Footer,
            ShoppingCart
        },
        created() {
            //判断用户是否登录
            if(!this.$store.state.UserInfo.loginStatus) {
                return this.$router.push({name:'Layout'});
            }

            //初始化购物车
            this.$store.dispatch('ShoppingCart/setInitCart');

        },
        watch: {


        },
        computed: {
            cartGoodsTotal () {     //购物车产品数量
                return this.cartGoods.length;
            },
            isCartEmpty() {         //购物车是否为空
                return this.cartGoods.length ? false : true;
            },
            totalProducts () {      //产品总价格
                return this.$store.state.ShoppingCart.totalProduct;
            },
            allSelectStatus() {     //产品全选状态控制
                return this.$store.state.ShoppingCart.allSelect;
            },
            ...mapGetters({
                cartGoods:'ShoppingCart/getProductsList',
                productsTotal:'ShoppingCart/productsTotal',
            }),

        },
        methods: {
            allProductSelect () {   //产品全选操作
                this.$store.dispatch('ShoppingCart/setCartProductsState',-1);
            },

            //结算
            cartBalance() {
                //return console.log(this.cartGoods);
                let isBuy = false;
                for(let m=0;m < this.cartGoods.length;m++){
                    if(this.cartGoods[m].state === true){
                        isBuy = true;
                        break;
                    }
                }
                if(isBuy === true){
                    return this.$router.push({name:'Balance'});
                }else{
                    return this.$store.commit('TipsModule/showTips',{content:'请选择需要下单的产品'});
                }
            }
        }

    }
</script>

<style>
    body, #app{
        height:100%;
    }
</style>

<style scoped>

    .shopping-cart {
        background: -webkit-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -o-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -moz-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        width:100%;
        overflow: hidden;
    }
    .shopping-cart-empty {
        height:100%;
    }
    .shopping-cart .cart {
        height:100%;
        padding:1.4rem 0.4rem 3rem 0.4rem;
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
    .shopping-cart .cart .cart-total {
        width:100%;
        height:1.2rem;
        position: fixed;
        left:0;
        bottom: 1.7rem;
        background:#fff;
        z-index: 96;
        padding-left:1rem;
        border-top:1px solid #e4e4e4;
    }
    .shopping-cart .cart .cart-total i{
        display:block;
        width:0.6rem;
        height:1.2rem;
        background:url(../assets/circle.png) no-repeat center center;
        background-size:0.4rem ;
        float:left;
    }
    .shopping-cart .cart .cart-total i.total-active{
        background:url(../assets/circle-active.png) no-repeat center center;
        background-size:0.4rem;
    }
    .shopping-cart .cart .cart-total .total-num{
        float:left;
        padding-left:0.6rem;
    }
    .shopping-cart .cart .cart-total .total-num p{
        line-height:1.2rem;
        font-size:0.32rem;
    }
    .shopping-cart .cart .cart-total .total-num span {
        color:#cc7f15;
    }
    .shopping-cart .cart .cart-total button{
        float:right;
        height:1rem;
        width:2.6rem;
        color:#fff;
        font-size:0.34rem;
        background:#cc7f15;
        border:none;
        border-radius:1.2rem;
        margin-top:0.1rem;
    }

   /* .shopping-cart .cart .cart-list .cart-list-box {
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
        -webkit-line-clamp: 1; !* 这个表示要显示几行 *!
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
        -webkit-line-clamp: 1; !* 这个表示要显示几行 *!
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
    }*/

</style>