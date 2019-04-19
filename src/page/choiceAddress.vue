<template>
    <div>
        <HeaderTitle title="选择地址"/>

        <div class="choice">
            <div class="choice-block" v-for="item in tradeAddressList">
                <div class="block-info" @click="addressChoice(item.id)">
                    <p>{{item.name}}</p>
                    <p>{{item.phone}}</p>
                    <p>{{item.city}}</p>
                    <p>{{item.street}}</p>
                </div>
                <div class="block-icon">
                    <i></i>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import HeaderTitle from '../components/HeaderTitle'
    import {mapState} from 'vuex'
    export default {
        name: 'choiceAddress',
        data() {
            return {
            }
        },
        components: {
            HeaderTitle
        },
        computed: {
            ...mapState('ShoppingCart',{
                tradeAddressList:'tradeAddressList'
            })
        },
        methods: {
            addressChoice(id) {
                this.$store.commit('ShoppingCart/setChoiceAddress',{id:id});
                return this.$router.push({name:'Balance'});

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
        background:rgba(204, 169, 25,0.08);
        border-radius:0.2rem;
        overflow: hidden;
    }
    .choice .choice-block div{
        float:left;
    }
    .choice .choice-block .block-info{
        width:calc(100% - 0.8rem);
    }
    .choice .choice-block p {
        height:0.8rem;
        line-height:0.8rem;
        font-size:0.34rem;
        color: #3d3d3d;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 这个表示要显示几行 */
        -webkit-box-orient: vertical;
    }
    .choice .choice-block p:first-child,.choice .choice-block p:nth-child(2) {
        font-weight: 600;
    }
    .choice .choice-block .block-icon{
        width:0.8rem;
    }
    .choice .choice-block i {
        display:block;
        width:0.8rem;
        height:3.2rem;
        background:url(../assets/circle-active.png) no-repeat center center;
        background-size:0.4rem;

    }
</style>