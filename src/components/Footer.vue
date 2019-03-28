<template>
    <div class="footer">
        <router-link :to="urlData.home">
            <i class="footer-home"></i>
            <p>Aoogi</p>
        </router-link>
        <router-link :to="urlData.classify">
            <i class="footer-classify"></i>
            <p>品类</p>
        </router-link>
        <router-link :to="urlData.car">
            <i class="footer-car"></i>
            <p>购物车</p>
        </router-link>
        <router-link :to="urlData.personal">
            <i class="footer-personal"></i>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                urlData: {
                    home: '/',
                    classify: '/classify',
                    car: '/cart',
                    personal: '/'


                }
            }
        }
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height:1.6rem;
        position: fixed;
        bottom: 0;
        left:0;
        background:#fff;
        padding-top:0.2rem;
        box-shadow:-0.08rem -0.08rem 0.08rem #ccc;
    }
    .footer a{
        display: block;
        width: 25%;
        text-align:center;
        float:left;
    }
    .footer p{
        font-size:0.34rem;
        margin-top:0.12rem;
        color:#4A4A4A;
    }
    .footer i{
        display:block;
        width:0.8rem;
        height:0.8rem;
        margin:0 auto;
        
    }
    i.footer-home {
        background:url(../assets/footer.png) no-repeat center center;
        background-size:0.7rem;
        background-position: 0 0;
    }
    i.footer-classify {
        background:url(../assets/footer.png) no-repeat center center;
        background-size:0.68rem;
        background-position: 0.07rem -0.9rem;
    }
    i.footer-car {
        background:url(../assets/footer.png) no-repeat center center;
        background-size:0.76rem;
        background-position: 0 -2rem;
    }
    i.footer-personal {
        background:url(../assets/footer.png) no-repeat center center;
        background-size:0.72rem;
        background-position: 0 -2.8rem;
    }

</style>