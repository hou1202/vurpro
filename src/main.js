// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import 'lib-flexible'                               //自动适应加载方案
import VueAwesomeSwiper from 'vue-awesome-swiper'   //加载AwesomeSwiper
import 'swiper/dist/css/swiper.css'                 //加载AwesomeSwiper样式
import httpConfig from './router/httpConfig'        //加载API接口文件
Vue.prototype.httpConfig = httpConfig;              //定义接口使用


Vue.use(VueAwesomeSwiper)

Vue.prototype.axios = Axios;
Axios.defaults.baseURL = "http://www.aoogi.com";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*拦截器处理Axios请求*/
  //请求拦截器
  Axios.interceptors.request.use(function(config){
      //在发送请求前些处理
      if(config.method == 'post') {
          config.data = qs.stringify(config.data);
      }
      return config;
  }, function(error){
      //对请求错误处理

      return Promise.reject(error);
  });
  //响应拦截器
  Axios.interceptors.response.use(function(response){
      //对响应数据处理

      return response;
  }, function(error){
      //对响应错误处理

      return Promise.reject(error);
  });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
