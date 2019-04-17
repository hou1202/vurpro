<template>
    <div class="balance">
        <HeaderTitle title="订单结算"/>

        <div class="balance-info">
            <!--收货地址-->
            <div class="address" v-if="emptyAddress">
                <div class="address-top">
                    <p>收货人：李白</p>
                    <p>13564078415</p>
                </div>
                <div class="address-under">
                    <i></i>
                    <div class="address-info">
                        <p>安徽省.合肥市.蜀山区</p>
                        <p>望江西路亚夏汽车大厦1602</p>
                    </div>
                    <i></i>
                </div>
            </div>
            <div class="address" v-if="!emptyAddress">
                <div class="address-empty">
                    <p>添加 / 选择收货地址...</p>
                    <i></i>
                </div>
            </div>

            <!--产品清单-->
            <div class="balance-product">
                <div class="balance-com-header">
                    <i class="product-icon"></i>
                    <h2>购物清单</h2>
                </div>
                <div class="product-item" v-for="(item, index) in TradeProductItem" :key="index">
                    <img :src="item.thumbnail" alt="" />
                    <div class="product-info">
                        <p>{{item.title}}</p>
                        <p>{{item.name}}</p>
                        <p>￥{{item.price}}</p>
                        <p>x {{item.num}}</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="../assets/goods.jpg" alt="" />
                    <div class="product-info">
                        <p>联想ThinkPad 翼480（12CD）14英寸轻薄窄边框笔记本电脑 冰原银</p>
                        <p>i5+8g+独显</p>
                        <p>￥5499.00</p>
                        <p>x 2</p>
                    </div>
                </div>
                <div class="product-item">
                    <img src="../assets/goods.jpg" alt="" />
                    <div class="product-info">
                        <p>联想ThinkPad 翼480（12CD）14英寸轻薄窄边框笔记本电脑 冰原银</p>
                        <p>i5+8g+独显</p>
                        <p>￥5499.00</p>
                        <p>x 2</p>
                    </div>
                </div>
            </div>

            <!--附属信息-->
            <div class="balance-attach">
                <div class="attach-item">
                    <h2>优惠券</h2>
                    <p>无</p>
                    <i></i>
                </div>
                <div class="attach-item">
                    <h2>留言</h2>
                    <input type="text" placeholder="(选填)您有什么想说的..." />
                </div>
            </div>

            <!--支付方式-->
            <div class="balance-pay">
                <div class="balance-com-header">
                    <i class="pay-icon"></i>
                    <h2>支付方式</h2>
                </div>
                <div class="pay-item">
                    <i class="pay-ali"></i>
                    <p>支付宝支付</p>
                    <i :class="{'pay-active' : (isActive=='ali')}" @click="selectActive('ali')"></i>
                </div>
                <div class="pay-item">
                    <i class="pay-weixin"></i>
                    <p>微信支付</p>
                    <i :class="{'pay-active' : (isActive=='wx')}" @click="selectActive('wx')"></i>
                </div>
                <div class="pay-item">
                    <i class="pay-wallet"></i>
                    <p>钱包支付</p>
                    <i :class="{'pay-active' : (isActive=='wallet')}" @click="selectActive('wallet')"></i>
                </div>
            </div>

            <!--结算信息-->
            <div class="balance-information">
                <div class="balance-com-header">
                    <i class="information-icon"></i>
                    <h2>结算信息</h2>
                </div>
                <div class="information-con">
                    <p><span>交易总金额：</span>￥25.00</p>
                    <p><span>商品总金额：</span>￥25.00</p>
                    <p><span>优惠金额：</span>￥25.00</p>
                    <p><span>运费金额：</span>￥25.00</p>
                    <p><span>订单积分：</span>25.00</p>
                    <p><span>实付金额：</span>￥25.00</p>
                </div>

            </div>

        </div>

        <!--立即支付-->
        <div class="balance-payment">
            <p>支付金额： <span>￥{{productsTotal}}</span></p>
            <button type="button" @click="testClick">立 即 支 付</button>
        </div>


    </div>
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'balance',
        data() {
            return {
                emptyAddress:true,
                isActive: 'ali',
            }
        },
        components: {
            HeaderTitle
        },
        computed: {
            ...mapGetters({
                TradeProductItem:'ShoppingCart/getTradeProductItem',
                getProductsList:'ShoppingCart/getProductsList',
                productsTotal:'ShoppingCart/productsTotal',

            }),

        },
        watch: {
            TradeProductItem() {
                if(this.TradeProductItem.length == 0){
                    this.TradeProductItem = this.$store.cartProductsList;
                }
                //console.log(this.TradeProductItem)
            }
        },
        methods: {
            testClick() {
                //console.log(this.TradeProductItem);
                //console.log(this.productsTotal);
                //console.log(this.TradeProductItem);
                console.log(this.$store.state.cartProductsList);
                console.log(this.$store.state.ShoppingCart.cartProductsList);
                //console.log(this.$store.state.cartProductsList);
                //console.log(this.$store.state.testM.testNum);
            },
            selectActive(index) {
                return this.isActive = index;
            }
        }
    }
</script>

<style scoped>
    .balance {
        /*background: -webkit-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -o-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: -moz-linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);
        background: linear-gradient(rgba(204,127,21,0.2), rgba(222, 222, 222, 0.2) 50%);*/
        background: rgba(242, 242, 242, 0.5);
        width:100%;
        overflow: hidden;
    }
    .balance .balance-info {
        padding:0.2rem 0.4rem 1.6rem 0.4rem;
    }
    .balance .balance-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    /*收货地址*/
    .balance .balance-info .address {
        border:1px solid #cc5116;
        padding:0.4rem;
        border-radius:0.2rem;
        height:3rem;
        background: #ffffff;
    }
    .balance .balance-info .address p {
        font-size:0.32rem;
        color:#4a4a4a;
        height:0.6rem;
        line-height:0.6rem;
    }
    .balance .balance-info .address .address-top {
        overflow: hidden;
    }
    .balance .balance-info .address .address-top p{
        width:50%;
        float:left;
    }
    .balance .balance-info .address .address-top p:last-child{
        text-align:center;
    }
    .balance .balance-info .address .address-under{
        overflow: hidden;
    }
    .balance .balance-info .address .address-under i {
        display:block;
        width:0.6rem;
        height:1.6rem;
        float:left;
    }
    .balance .balance-info .address .address-under .address-info {
        width:calc(100% - 1.4rem);
        float:left;
        padding:0.3rem 0.2rem 0 0.4rem;
    }
    .balance .balance-info .address .address-under i:first-child {
        background:url(../assets/address.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .balance .balance-info .address .address-under i:last-child {
        float:right;
        background:url(../assets/open.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .balance .balance-info .address .address-empty {
        padding:0 0.4rem;
        overflow: hidden;
    }
    .balance .balance-info .address .address-empty p {
        height:2.2rem;
        line-height:2.2rem;
        float:left;
    }
    .balance .balance-info .address .address-empty i{
        display:block;
        width:0.6rem;
        height:2.2rem;
        float:right;
        background:url(../assets/open.png) no-repeat center center;
        background-size: 0.6rem;
    }
    /*产品清单*/
    .balance .balance-info .balance-product {
        margin-top:0.4rem;
        background:#fff;
        border-radius:0.2rem;
        padding:0.4rem;
    }
    .balance .balance-info .balance-product .product-item {
        overflow: hidden;
        height:2.2rem;
        padding:0.2rem 0;
    }
    .balance .balance-info .balance-product .product-item img {
        width:1.8rem;
        height:1.8rem;
        border-radius:0.1rem;
        float:left;
    }
    .balance .balance-info .balance-product .product-item .product-info {
        width:calc(100% - 1.9rem);
        padding-left:0.3rem;
        float:right;
    }
    .balance .balance-info .balance-product .product-item .product-info p{
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.32rem;
        color:#cc5116;
        float:left;
    }
    .balance .balance-info .balance-product .product-item .product-info p:first-child {
        color:#4a4a4a;
        font-size:0.34rem;
    }
    .balance .balance-info .balance-product .product-item .product-info p:nth-child(2){
        width:79%;
    }
    .balance .balance-info .balance-product .product-item .product-info p:nth-child(3){
        width:79%;
    }
    .balance .balance-info .balance-product .product-item .product-info p:last-child{

        width:20%;
        height:1.2rem;
        line-height:1.2rem;
        float:right;
        position:relative;
        top:-0.6rem;
    }
    /*附属信息*/
    .balance .balance-info .balance-attach {
        margin-top:0.4rem;
        background:#fff;
        border-radius:0.2rem;
        padding:0.4rem;
    }
    .balance .balance-info .balance-attach .attach-item {
        border-bottom: 1px solid #e7e7e7;
        overflow: hidden;
        padding:0.2rem 0;
        color:#4a4a4a;
    }
    .balance .balance-info .balance-attach .attach-item:last-child{
        border-bottom: none;
    }
    .balance .balance-info .balance-attach .attach-item h2 {
        width:2rem;
        height:0.6rem;
        line-height:0.6rem;
        font-size:0.32rem;
        float:left;
    }
    .balance .balance-info .balance-attach .attach-item p {
        float:left;
        width:calc(100% - 2.7rem);
        height:0.6rem;
        line-height:0.6rem;
        text-align:right;
        padding-right:0.4rem;
    }
    .balance .balance-info .balance-attach .attach-item i{
        display:block;
        width:0.6rem;
        height:0.6rem;
        float:right;
        background:url(../assets/open.png) no-repeat center center;
        background-size: 0.4rem;
    }
    .balance .balance-info .balance-attach .attach-item input {
        float:left;
        width:calc(100% - 2.6rem);
        height:0.6rem;
        line-height:0.6rem;
        text-align:right;
        background:#fff;
        border:none;
        font-size:0.32rem;
    }
    /*支付方式*/
    .balance .balance-info .balance-pay{
        margin-top:0.4rem;
        background:#fff;
        border-radius:0.2rem;
        padding:0.4rem;
    }
    .balance .balance-info .balance-pay .pay-item{
        height:1.2rem;
        line-height:1.2rem;
        padding:0 0.4rem;
    }
    .balance .balance-info .balance-pay .pay-item p {
        width:2rem;
        height:1.2rem;
        line-height:1.2rem;
        padding-left:0.2rem;
        font-size:0.32rem;
        color:#4a4a4a;
        float:left;
    }
    .balance .balance-info .balance-pay .pay-item i {
        display:block;
        width:1rem;
        height:1.2rem;
        float:left;
    }
    .balance .balance-info .balance-pay .pay-item i:last-child {
        float:right;
        background:url(../assets/circle.png) no-repeat center center;
        background-size: 0.4rem;
    }
    .pay-item i.pay-ali {
        background:url(../assets/alipay.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .pay-item i.pay-weixin {
        background:url(../assets/wxpay.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .pay-item i.pay-wallet {
        background:url(../assets/wallet.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .pay-item i.pay-active {
        background:url(../assets/circle-active.png) no-repeat center center !important;
        background-size: 0.4rem !important;
    }
    /*结算信息*/
    .balance .balance-info .balance-information{
        margin-top:0.4rem;
        background:#fff;
        border-radius:0.2rem;
        padding:0.4rem 0.4rem 0.2rem 0.4rem;
    }
    .balance .balance-info .balance-information .information-con {
        padding:0.2rem 0.4rem;
    }
    .balance .balance-info .balance-information .information-con p {
        height:0.6rem;
        line-height:0.6rem;
        color:#cc7f15;
        margin-bottom: 0.2rem;
    }
    .balance .balance-info .balance-information .information-con p:last-child {
        margin:0;
    }
    .balance .balance-info .balance-information .information-con span {
        font-weight: 600;
        letter-spacing: 0.04rem;
        color:#4a4a4a;
    }
    /*立即支付*/
    .balance-payment {
        width:100%;
        position: fixed;
        bottom:0;
        height:1.4rem;
        background:#fff;
        z-index: 96;
    }
    .balance-payment p {
        width:calc(100% - 2.8rem);
        height:1.4rem;
        line-height:1.4rem;
        float:left;
        text-align:center;
    }
    .balance-payment span {
        color:#cc7f15;
    }
    .balance-payment button {
        float:right;
        height:1rem;
        width:2.6rem;
        color:#fff;
        font-size:0.32rem;
        background:#cc7f15;
        border:none;
        border-radius:1.2rem;
        margin-top:0.2rem;
    }

    /*通用样式*/
    .balance-com-header {
        height:0.6rem;
        margin-bottom: 0.2rem;
    }
    .balance-com-header i {
        display:block;
        width:0.6rem;
        height:0.6rem;
        float:left;
    }
    .balance-com-header i.product-icon{
        background:url(../assets/bill.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .balance-com-header i.pay-icon{
        background:url(../assets/balance-pay.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .balance-com-header i.information-icon{
        background:url(../assets/balance-info.png) no-repeat center center;
        background-size: 0.6rem;
    }
    .balance-com-header h2 {
        font-size:0.34rem;
        height:0.6rem;
        line-height:0.6rem;
        font-weight: 600;
        color:#cc5116;
        margin-left:0.2rem;
        float:left;
        letter-spacing: 0.06rem;
    }

</style>
