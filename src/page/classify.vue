<template>
    <div>
        <div class="classify">
            <a href="" v-for="item in classifyList">
                <img src="../assets/nav.png" alt="" />
                <p>Iphone</p>
            </a>
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
                classifyList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
            }
        },
        components: {
            Footer
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