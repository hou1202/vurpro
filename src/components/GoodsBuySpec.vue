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
                <i class="reduce"></i>
                <input type="number" name="num" value="1" />
                <i class="increase"></i>
            </div>
            <div class="select-goods">
                <div class="select-option">
                    <span>移动版</span>
                    <input type="radio" name="spec_id" />
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsBuySpec",
        props: ['sepcs','baseInfo']
    }
</script>

<style scoped>
    .goods-spec {
        position: fixed;
        bottom: 1.2rem;
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
        background-size: 0.5rem;
    }
    .goods-spec .spec-select {
        padding:0.4rem 0;
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

</style>