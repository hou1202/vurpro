<template>
    <div>
        <div class="classify">
            <router-link :to="'/goodsClassifyList/'+item.id"  v-for="(item, index) in classifyList" :key="index">
                <img :src="item.thumbnail" alt="" />
                <p>{{item.title}}</p>
            </router-link>
        </div>

        <!--底部导航-->
        <Footer />
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    export default {
        name: 'classify',
        data() {
            return {
                classifyList:[]
            }
        },
        components: {
            Footer
        },
        created() {
            this.axios.get(this.$apiConfig.ApiClassify+'0')
                .then( config => {
                    this.classifyList = config.data;
                })
                .catch( error => {
                    console.log(error);
                })
        }

    }
</script>

<style scoped>
    .classify {
        width:100%;
        overflow: hidden;
        padding:1.5rem 1rem;
    }
    .classify a {
        display:block;
        width: 25%;
        float:left;
        padding:0.2rem;
        text-align:center;
    }
    .classify img {
        width:1.4rem;
        height:1.4rem;
        border-radius:0.2rem;

    }
    .classify p {
        height:0.8rem;
        line-height:0.8rem;
        font-size:0.32rem;
        color:#cc7f15;

        overflow: hidden;
        white-space: nowrap;
    }

</style>