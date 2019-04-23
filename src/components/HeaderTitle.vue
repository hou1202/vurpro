<template>
    <div class="header-title">
        <h2>{{title}}</h2>
        <i @click="returnBack()"></i>
    </div>
</template>

<script>
    export default {
        name: "HeaderTitle",
        props: {
            title: {
                type: String,
                default: '',
            },
            backUrl: {
                type: String,
                default: null,
            }
        },
        methods: {
            returnBack(){
                if(this.backUrl === null){
                    return this.$router.go(-1);
                }
                return this.$router.push(this.backUrl);
            }
        }

    }
</script>

<style scoped>
    .header-title {
        position: relative;
    }
    .header-title h2{
        width:100%;
        height:1.2rem;
        line-height:1.2rem;
        text-align:center;
        font-size:0.36rem;
        letter-spacing: 0.2rem;
        font-weight: bold;
        color:#cc5116;
    }
    .header-title i {
        display:block;
        width:1.2rem;
        height:1.2rem;
        background:url(../assets/back.png) no-repeat center center;
        background-size:0.7rem;
        position: absolute;
        top:0;
        left:0.4rem;

    }

</style>