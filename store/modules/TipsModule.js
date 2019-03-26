/**
 * Created by Administrator on 2019/3/25.
 */
const state = {
    popTipsStatus : false,
    /**
     * Tips标题
     * String
     * */
    tipsTitle: '',
    /**
     * Tips内容
     * String
     * */
    tipsContent: '',
    /**
     * Tips确认按钮
     * Booleans
     * 默认：false
     * */
    tipsConfirm: false,
    /**
     * Tips取消按钮
     * Booleans
     * 默认：false
     * */
    tipsCancel: false,
};


const mutations = {
    /**关闭弹出提示信息
     * time 延时关闭的时间，默认3000（3秒）
     * */
    delayedHideTips (state, time=3000) {
        setTimeout(function (){
            state.popTipsStatus = false
        }, time);
    },
    //显示弹出提示信息
    showTips (state,data) {
        if(data.title){
            state.tipsTitle = data.title;
        }
        if(data.content){
            state.tipsContent = data.content;
        }
        if(data.confirm){
            state.tipsConfirm = data.confirm;
        }
        if(data.cancel){
            state.tipsCancel = data.cancel;
        }
        state.popTipsStatus =true;

        if(!data.closed){   //是否自动关闭，默认自动关闭
            let closeTime = 3000;
            if(data.time){
                closeTime = data.time;
            }
            setTimeout(function (){
                state.popTipsStatus = false
            }, closeTime);
        }
    }
};

export default {
    //定义modules命名空间
    namespaced: true,
    state,
    mutations
}