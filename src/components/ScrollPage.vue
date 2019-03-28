<template>
    <div class="scroll"
         @touchstart="touchStart($event)"
         @touchmove="touchMove($event)"
         @touchend="touchEnd($event)"
         @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
        <!--<p>上拉加载更多</p>-->
        <!--<p>https://www.cnblogs.com/sichaoyun/p/6647458.html</p>-->
        <i class="loading"></i>
    </div>
</template>

<script>
    export default {
        name: 'ScrollPage',
        data() {
            return {
                top: 0,
                state: 0,
                startY: 0,
                touching: false,
                infiniteLoading: false
            }
        },
        props: {
            offset: {
                type: Number,
                default: 40
            },
            enableInfinite: {
                type: Boolean,
                default: true
            },
            enableRefresh: {
                type: Boolean,
                default: true
            },
            onRefresh: {
                type: Function,
                default: undefined,
                required: false
            },
            onInfinite: {
                type: Function,
                default: undefined,
                require: false
            }
        },
        methods: {
            touchStart(e) {
                this.startY = e.targetTouches[0].pageY;
                this.startScroll = this.$el.scrollTop || 0;
                this.touching = true;
            },
            touchMove(e) {
                if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
                    return
                }
                let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
                if (diff > 0) e.preventDefault();
                this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);

                if (this.state === 2) { // in refreshing
                    return
                }
                if (this.top >= this.offset) {
                    this.state = 1
                } else {
                    this.state = 0
                }
            },
            touchEnd(e) {
                if (!this.enableRefresh) return
                this.touching = false;
                if (this.state === 2) { // in refreshing
                    this.state = 2;
                    this.top = this.offset;
                    return
                }
                if (this.top >= this.offset) { // do refresh
                    this.refresh()
                } else { // cancel refresh
                    this.state = 0;
                    this.top = 0;
                }
            },
            refresh() {
                this.state = 2;
                this.top = this.offset;
                this.onRefresh(this.refreshDone);
            },
            refreshDone() {
                this.state = 0;
                this.top = 0;
            },

            infinite() {
                this.infiniteLoading = true;
                this.onInfinite(this.infiniteDone);
            },

            infiniteDone() {
                this.infiniteLoading = false;
            },

            onScroll(e) {
                if (!this.enableInfinite || this.infiniteLoading) {
                    return
                }
                let outerHeight = this.$el.clientHeight;
                let innerHeight = this.$el.querySelector('.inner').clientHeight;
                let scrollTop = this.$el.scrollTop;
                let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0;
                let infiniteHeight = this.$el.querySelector('.load-more').clientHeight;
                let bottom = innerHeight - outerHeight - scrollTop - ptrHeight;
                if (bottom < infiniteHeight) this.infinite()
            }

        }
    }
</script>

<style scoped>
    .scroll {
        margin-top:0.8rem;
        height:1rem;
        overflow: hidden;
        text-align:center;
        vertical-align: middle
    }
    .scroll p {
        height:0.8rem;
        font-size:0.32rem;
        color: #858585;
        letter-spacing: 0.06rem;
    }
    .scroll i {
        display:block;
        width:3rem;
        height:1rem;
        margin:0 auto;
    }
    i.loading {
        background:url("../assets/goods-load.gif") no-repeat center center;
        background-size:3rem;
    }
</style>