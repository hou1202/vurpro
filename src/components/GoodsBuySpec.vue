<template>
    <div class="goods-spec" v-if="specStatus">
        <div class="spec-header">
            <img v-lazy="baseInfo.img" alt="" />
            <div class="header-title">
                <p>{{baseInfo.title}}</p>
                <p>￥{{price}}</p>
                <p>库存：{{stock}}</p>
            </div>
            <i @click="closeSpec"></i>
        </div>
        <div class="spec-select">
            <div class="select-num">
                <span>购买数量</span>
                <i class="reduce" @click="numChange('reduce')"></i>
                <input type="number" name="num" v-model.number="buyNum" @input.lazy="watchNum" />
                <i class="increase" @click="numChange('increase')"></i>
            </div>

            <div class="select-goods">
                <div class="select-option" v-for="(item,index) in specs" :key="index" @click="selectOption(index)">
                    <span :class="{'option-active': (isActive==index)}" >{{item.name}}</span>
                    <input type="radio" name="spec_id" :value="item.id" :checked="{'checked': (isActive==index)}"/>
                </div>
            </div>
            <button type="button" @click="formButton">确认</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsBuySpec",
        props: ['specs','baseInfo','goodsId'],
        data() {
            return {
                buyNum: 1,
                price: 0.00,
                stock: 1,
                isActive: 0,
            }
        },
        created() {
            setTimeout(()=>{
                this.axios.get(this.$apiConfig.ApiGoodsSpec+this.goodsId)
                    .then( config => {
                        this.$store.commit('SelectGoodsSpec/setGoodsBaseInfo',{
                            title: this.baseInfo.title,
                            thumbnail: this.baseInfo.thumbnail,
                            id: config.data[0].goods_id,
                            price: config.data[0].price,
                            stock: config.data[0].stock,
                            spec_id: config.data[0].id,
                        });
                        this.price = this.$store.state.SelectGoodsSpec.price;
                        this.stock = this.$store.state.SelectGoodsSpec.stock;
                    })
                    .catch( error => {
                        console.log(error);
                    })
            },1000);

        },
        computed: {
            /**
             * 控制规格面板状态
             * */
            specStatus(){
                return this.$store.state.SelectGoodsSpec.specStatus
            },
        },
        methods: {
            /**
             * 增减购物产品数量
             * */
            numChange($type) {
                if($type === 'reduce' && this.$store.state.SelectGoodsSpec.num > 1){
                    //减少购物产品数量
                    this.$store.commit('SelectGoodsSpec/setGoodsNum',{type:'reduce'})
                }else if($type === 'increase' && this.$store.state.SelectGoodsSpec.num < this.$store.state.SelectGoodsSpec.stock) {
                    //增加购物产品数量
                    this.$store.commit('SelectGoodsSpec/setGoodsNum',{type:'increase'});
                }
                return this.buyNum = this.$store.state.SelectGoodsSpec.num
            },

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

            /**
             * 关闭规格面板
             * */
            closeSpec(){
              this.$store.commit('SelectGoodsSpec/setSpecStatus');
            },

            /**
             * 选择产品规格
             * */
            selectOption(index){
                let $spec = this.specs[index];
                this.$store.commit('SelectGoodsSpec/setGoodsSpec',{
                    price: $spec['price'],
                    stock: $spec['stock'],
                    spec_id: $spec['id'],
                });
                this.price = this.$store.state.SelectGoodsSpec.price;
                this.stock = this.$store.state.SelectGoodsSpec.stock;
                this.buyNum = 1;
                this.isActive = index;      //设置首选项
            },

            formButton() {

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