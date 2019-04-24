<template>
    <div>
        <HeaderTitle title="选择优惠券"/>

        <div class="choice">
            <div class="choice-block"  @click="CouponChoice()">
                <div class="block-upper">
                    <div class="upper-left">
                        <p>类型</p>
                        <p>通用型</p>
                    </div>
                    <div class="upper-right">
                        <p><span>￥</span>50</p>
                    </div>
                </div>
                <div class="block-lower">
                    <p><span>金额：</span> 满 ￥300.00 减 ￥50.00</p>
                    <p><span>商品：</span> 全场通用</p>
                    <p><span>有效期：</span> 2019-05-12</p>
                </div>
            </div>
            <button type="button" @click="testChoice">获取</button>
        </div>

    </div>
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'
    import {mapState} from 'vuex'
    export default {
        name: 'choiceCoupon',
        data() {
            return {
            }
        },
        components: {
            HeaderTitle
        },
        computed: {
            ...mapState('ShoppingCart',{
                tradeCouponList:'tradeCouponList'
            })
        },
        methods: {
            CouponChoice(id) {
                this.$store.commit('ShoppingCart/setChoiceCoupon',{id:id});
                return this.$router.push({name:'Balance'});

            },
            testChoice() {
                this.$store.dispatch('ShoppingCart/getTradeCouponData',{id:2});
            }
        }
    }
</script>

<style scoped>
    .choice{
        padding:0.2rem 0.4rem;
    }
    .choice .choice-block {
        width:90%;
        margin:0.3rem auto;
        padding:0.2rem 0.4rem;
        overflow: hidden;
    }
    .choice .choice-block .block-upper{
        height:1.6rem;
        border-radius:0.2rem;
        border-width:2px;
        border-style:dotted dotted none dotted;
        border-color:#cc7f15;
    }
    .choice .choice-block .block-upper div{
        width:50%;
        float:left;
        text-align:center;
        padding:0.2rem;
    }
    .choice .choice-block .block-upper .upper-left p{
        height:0.6rem;
        line-height:0.6rem;
        color:#095619;
        font-size:0.34rem;
    }
    .choice .choice-block .block-upper .upper-left p:first-child{
        color:#ccc;
        font-size:0.32rem;
    }
    .choice .choice-block .block-upper .upper-right p{
        font-size:0.9rem;
        height:1.2rem;
        line-height:1.2rem;
        color:#cc7f15;
    }
    .choice .choice-block .block-upper .upper-right span{
        font-size:0.4rem;
    }
    .choice .choice-block .block-lower{
        padding:0.3rem;
        border-radius:0.2rem;
        border:2px solid #cc7f15;
    }
    .choice .choice-block .block-lower p {
        height:0.45rem;
        line-height:0.45rem;
        font-size:0.32rem;
        color:#4a4a4a;
    }
    .choice .choice-block .block-lower span {
        color:#095619;
    }

</style>