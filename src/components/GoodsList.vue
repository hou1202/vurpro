<template>
    <div>
        <router-link :to="'/goods/'+item.id" class="goods-list" v-for="(item, index) in goods.res" :key="index" >
            <img class="goods-banner" :src="item.thumbnail" alt="" />
            <div class="goods-title" v-if="Hot">HOT</div>
            <h2>{{item.title}}</h2>
            <p>{{item.info}}</p>
            <span>￥{{item.sell_price}}</span>
            <span>￥{{item.origin_price}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'GoodsList',
        props: {
            goods:{
                type:[Object,Array]
            },
        },
        data() {
            return {
                Hot:false,
                Surplus : true,
            }
        },

    }
</script>

<style scoped>
    /*产品列表*/
    .goods-list {
        display:block;  /*a标签用*/
        width:50%;
        max-width:6rem;
        color:#4A4A4A;
        padding:0.2rem;
        float:left;
        overflow: hidden;
        position:relative;
    }
    .goods-list .goods-banner{
        width:100%;
        padding:0.2rem;
        border-radius:0.4rem;
    }
    .goods-list .goods-title{
        width:1rem;
        height:0.6rem;
        line-height:0.6rem;
        text-align:center;
        font-size:0.32rem;
        color:#fff;
        background: rgba(204, 82, 33, 0.7);
        border-radius:1rem;
        position:absolute;
        top:0.4rem;
        left:0.4rem;
    }
    .goods-list .goods-title{
        width:1rem;
        height:0.6rem;
        line-height:0.6rem;
        text-align:center;
        font-size:0.32rem;
        color:#fff;
        background: rgba(204, 82, 33, 0.7);
        border-radius:1rem;
        position:absolute;
        top:0.4rem;
        left:0.4rem;
    }
    .goods-list h2 {
        height:0.48rem;
        line-height:0.48rem;
        font-size:0.32rem;
    }
    .goods-list p {
        height:0.4rem;
        line-height:0.4rem;
        font-size:0.28rem;
        color:#949494;
    }
    .goods-list h2,.goods-list p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .goods-list span {
        max-width:49%;
        height:0.6rem;
        line-height:0.6rem;
        float:left;
        color:#cc7f15;
        font-size:0.32rem;

        overflow: hidden;
        white-space: nowrap;
    }
    .goods-list span:last-child{
        float:right;
        color:#949494;
        font-size:0.28rem;
        padding-right:0.12rem;
    }

</style>