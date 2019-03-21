<template>
    <div class="goods-spec">
        <div class="spec-header">
            <img src="../assets/goods.jpg" alt="" />
            <div class="header-title">
                <p>华为 HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机</p>
                <p>￥2540.00</p>
                <p>库存：2541</p>
            </div>
            <i></i>
        </div>
        <div class="spec-select">
            <div class="select-num">
                <span>购买数量</span>
                <i></i>
                <input type="number" name="num" value="1" />
                <i></i>
            </div>
            <div class="select-goods">


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsBuySpec"
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

</style>