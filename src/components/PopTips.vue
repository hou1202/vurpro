<template>
    <div class="pop-tips" v-show="conStatus">

        <div class="pop">
            <h2 v-if="title">{{title}}</h2>
            <p>{{content}}</p>
            <div class="pop-button">
                <button v-if="confirm" @click="tipsClick">确 认</button>
                <button v-if="cancel" @click="tipsClick">取 消</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PopTips',
        data() {
            return {
                title: '',
                content: '',
                confirm: false,
                cancel: false,
            }
        },
        methods: {
            tipsClick() {
                return this.$store.commit('TipsModule/delayedHideTips',0)
            }
        },
        computed: {
            conStatus() {
                this.title = this.$store.state.TipsModule.tipsTitle;
                this.content = this.$store.state.TipsModule.tipsContent;
                this.confirm = this.$store.state.TipsModule.tipsConfirm;
                this.cancel = this.$store.state.TipsModule.tipsCancel;
                return this.$store.state.TipsModule.popTipsStatus;
            }
        }
    }
</script>

<style scoped>
    .pop-tips {
        width:100%;
        height:100%;
        z-index: 99;
        position: fixed;
        top:0;
        left:0;
    }
    .pop-tips .pop {
        min-width:4rem;
        max-width:8rem;
        text-align:center;
        color:#fff;
        letter-spacing: 0.06rem;
        background: rgba(72, 71, 67, 0.96);
        padding:0.4rem;
        margin:0 auto;
        border-radius:0.2rem;
        position: relative;
        top:35%;
    }
    .pop-tips .pop h2 {
        font-size:0.34rem;
        height:0.8rem;
        line-height:0.8rem;
        font-weight: 600;
        border-bottom: 1px solid #fff;
        margin-bottom: 0.4rem;
    }
    .pop-tips .pop p {
        line-height:0.5rem;
        font-size:0.32rem;
        margin:0.3rem 0;
    }
    .pop-tips .pop .pop-button button{
        width:1.6rem;
        height:0.8rem;
        color:#fff;
        font-size:0.32rem;
        background: rgba(142, 137, 114, 0.6);
        border:none;
        border-radius:0.16rem;
        margin:0.4rem 0.8rem 0.2rem 0.8rem;

    }
    .pop-tips .pop .pop-button button:last-child{
        border:1px solid rgb(142, 137, 114);
        background:rgba(255, 255, 255, 0.7);
        color: #8c8e51;
    }

</style>