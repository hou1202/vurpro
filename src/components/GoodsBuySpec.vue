<template>
    <div class="goods-spec">
        <div class="spec-header">
            <img v-lazy="baseInfo.img" alt="" />
            <div class="header-title">
                <p>{{baseInfo.title}}</p>
                <p>￥2540.00</p>
                <p>库存：2541</p>
            </div>
            <i></i>
        </div>
        <div class="spec-select">
            <div class="select-num">
                <span>购买数量</span>
                <i class="reduce" v-on:click="numReduce"></i>
                <input type="number" name="num" v-model="buyNum" />
                <i class="increase" @click="numIncrease"></i>
            </div>
            <div class="select-goods">
                    <div class="select-option" v-for="(item,index) in sepcs" :key="index" @click="selectOption">
                        <span :class="{'option-active':isActive(index)}">{{item.name}}</span>
                        <input type="radio" name="spec_id" />
                    </div>
            </div>
            <button type="button">确认</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsBuySpec",
        props: ['sepcs','baseInfo'],
        data() {
            return {
                buyNum:1,
            }
        },
        methods: {
            numReduce() {
                if(this.buyNum > 1){
                    return this.buyNum--
                }
            },
            numIncrease() {
                return this.buyNum++
            },
            isActive(index) {
                if(index){
                    return false
                }
                return true;
            },
            selectOption(){
                return true
            }
        }
    }

</script>

<style scoped>
    .goods-spec {
        position: fixed;
        bottom: 1.18rem;
        z-index: 90;
        background:#fff;
        width:100%;
        padding:0.4rem 0.6rem;
        border:1px solid #ccc;
        border-bottom:none;
        border-top-left-radius:0.2rem;
        border-top-right-radius:0.2rem;
    }
    .goods-spec .spec-header {
        width:100%;
        height:1.5rem;
    }
    .goods-spec .spec-header img{
        width:1.5rem;
        height:1.5rem;
        float:left;
        border-radius:0.12rem;
    }
    .goods-spec .spec-header .header-title{
        width:6.3rem;
        float:left;
        padding:0.1rem 0.2rem;
    }
    .goods-spec .spec-header .header-title p{
        height:0.4rem;
        line-height: 0.4rem;
        font-size:0.32rem;
        color:#cc5116;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .goods-spec .spec-header .header-title p:first-child{
        height:0.5rem;
        line-height: 0.5rem;
        font-size:0.34rem;
        color: #6d6d6d;
    }
    .goods-spec .spec-header i{
        display:block;
        float:right;
        width:0.7rem;
        height:1.5rem;
        background:url(../assets/close.png) no-repeat;
        background-size: 0.6rem;
    }
    .goods-spec .spec-select {
        padding:0.4rem 0;
        text-align:center;
    }
    .goods-spec .spec-select .select-num {
        height:1rem;
        line-height:1rem;
        display:flex;
    }
    .goods-spec .spec-select .select-num span {
        font-size:0.32rem;
        color:#4a4a4a;
        padding-right:0.4rem;
    }
    .goods-spec .spec-select .select-num i {
        display:block;
        width:0.6rem;
        height:1rem;
    }
    i.increase {
        background:url(../assets/increase.png) no-repeat center center;
        background-size:0.4rem;
    }
    i.reduce {
        background:url(../assets/reduce.png) no-repeat center center;
        background-size:0.4rem;
    }
    .goods-spec .spec-select .select-num input {
        width:1.6rem;
        height:0.7rem;
        line-height:0.7rem;
        text-align:center;
        font-size:0.32rem;
        color:#4a4a4a;
        padding:0 0.2rem;
        margin:0 0.3rem;
        background:#fff;
        border:none;
        border-bottom: 1px solid #ccc;
    }
    .goods-spec .spec-select .select-goods{
        padding:0.2rem 0;
        overflow: hidden;
    }
    .goods-spec .spec-select .select-goods .select-option {
        height:1rem;
        float:left;
        overflow: hidden;
        padding:0 0.4rem 0.4rem 0;
    }
    .goods-spec .spec-select .select-goods .select-option span{
        height:1rem;
        line-height:1rem;
        font-size:0.32rem;
        color:#6d6d6d;
        border:1px solid #6d6d6d;
        border-radius:0.2rem;
        padding:0.2rem 0.4rem;

    }
    .goods-spec .spec-select .select-goods .select-option input{
        display: none;
    }
    .goods-spec .spec-select .select-goods .select-option .option-active{
        color:#fff;
        border-color:#cc5116;
        background:#cc5116;
    }
    .goods-spec .spec-select button {
        width:80%;
        height:1rem;
        color:#fff;
        font-size:0.34rem;
        letter-spacing: 0.2rem;
        background: rgba(204, 81, 22, 0.9);
        margin-top:0.5rem;
        border:none;
        border-radius:0.2rem;
    }

</style>