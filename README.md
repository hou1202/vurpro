#项目安装
    1、安装vue-cli脚手架
        npm install -globel vue-cli
    2、初始化项目
        vue init webpack projectname
        //projectname : 项目名称，不能中文、大写字母、过长等
    3、进入项目
        cd projectname
    4、安装依赖
        npm install
    5、启动项目
        npm run dev
        
#项目结构
    index.html              项目根视图
    .postcssrc.js           postcss配置文件
    static                  静态文件
    src                     源码文件
        --main.js             入口文件
        --App.vue             第一个（主）vue资源组件
        --assets              公共资源文件
        --components          子资源组件
        --router              路由文件
    node_modules
    config                  配置文件
        --dev.env.js          开发环境配置文件
        --index.js            常规配置文件
        --prod.env.js         生产环境配置文件
    build                   包含服务器和webpack文件            
   
#VUE基础 
    Vue组件
        包含三个部分
            template:   视图
            script:     逻辑
            style:      样式
            
    Mustache:模板
        表现形式：{{语法/变量
        例：{{hello}}
        //语法/变量只能存在单行语句
        
    VUE基本指令：
        v-html:渲染文本
        v-text:渲染文本
            //v-html与v-text的区别在于，v-html可以渲染html标签，v-text只渲染文本，如有html标签，也当作文本来进行渲染
        v-bind:绑定
            简写 “:”
            v-bind:属性="语法/变量"
            例：v-bind:class="active" / :class="active"
            
    条件渲染 
        v-if:           
            //v-if判断标签中，与下同级标签之间不能嵌套，如a标签嵌套a标签，不行，如果出来嵌套，变为兄弟级关系。div标签除外
                例：<a href="#" v-if="show">
                        <p>是否显示</p>
                        <a href="#">与v-if判断标签之间的同级嵌套</a>
                    </a>
            //如果在v-if判断标签中，可以用template代替标签，template只做为一个承载容器，不做为渲染成组件输出。
                例：<template href="#" v-if="show">
                      <p>是否显示</p>
                      <a href="#">与v-if判断标签之间的同级嵌套</a>
                    </template>
        v-else:
        v-else-if:
        v-show
            //v-if与v-show的区别在于：
                //v-if为条件为真时插入标签，为假时删除标签——在低频率或复杂情况下，v-if的使用效率会更高。
                //v-show为条件的真假，通过css的display：none来控制标签的显示与隐藏——在高频率或简单情况下，v-show的使用效率会更高。
                
    列表渲染
        v-for
            数组列表渲染：根据一组数组进行列表渲染
            v-for="item in items"  /    v-for="(item, index) in items"
            //in 也可以用SCRITP的of代替，写法为：v-for="items of item"
            //index为数组的下标索引
            例：<li v-for="(item, index) in items" v-bind:key="index">{{item}}</li>
                //v-bind:key 是为列表加上KEY，加KEY时要保证在这个列表中KEY是唯一的。
            
            对象列表渲染
            v-for="(vlaue, key, index) in object"
            
            注：列表v-for渲染时，尽可能为每个列表都加上KEY    
            
        事件监听
             v-on:
                简写 “@”
                v-on:事件=“语法/变量/方法”
                例：v-on:click="handleClick"  /   @click="handleClicl"
                
            事件处理方法
                methods: {
                    function...
                }        
                
        数组更新检测
            变异方法    
                //变异方法会引起视图更新
                push('string')      //向数组的末尾添加一个或多个元素，并返回新的数组长度
                pop()               //删除并返回数组的最后一个元素
                shift()             //删除数组中的第一个元素，并返回第一个被删除元素的值
                unshift()           //向数组的开头添加一个或更多元素，并返回新的长度
                splice()            //向/从数组中添加/删除项目，然后返回被删除的项目
                sort()              //对数组的元素进行排序
                reverse()           //颠倒数组中元素的顺序
                
            替换方法
                //替换方法不会引起视图更新
                filter()            //创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
                concat()            //连接两个或多个数组
                slice()             //从已有的数组中返回选定的元素
            操作方法
                split()             //把一个字符串分割成字符串数组
                
    计算属性和观察者
        计算属性：computed
            computed:{
                ...//方法
            }
            计算属性computed和方法methods所得到的结果是一样的，但两者的不同点在于，computed是基于他们的依赖进行缓存的，只有当计算属性的相关依赖发生变化时，才重新计算；而methods是重复计算的
         
    表单输入与绑定
        双向数据绑定
            v-model
            //时时监听用户输入数据情况 
            
            修饰符
                .lazy           //change(失去焦点时)进行数据绑定
                    v-model.lazy=""
                .number         //将输入的数据转换成number类型
                    v-model.number=""
                .trim           //自动过滤输入首尾空格
                    v-model.trum=""
            
        侦听器
            watch：{
                ...//方法 
            }
            
#VUE组件
    组成
        Template    视图部分
            <template>
                ...
            </template>
            //只能存在一个根元素
        Script      逻辑部分
            <script>
                ...
            </script>
        Style       样式部分
            <style scoped>
                ...
            </style>
            //如果样式定义中加入了scoped，表示样式只在当前组件中生效，即为局部样式
            初始化样式或全局样式，一般可放在入口vue文件中
    子父级组件交互（组件组合/通信）
        父 ->  子 ： props
            父组件
                <Child :name="name" :class="class"/>
                data() {
                    return {
                        name: "this is parent msg",
                        class: {
                            techer: "Li lee",
                            opt:"English"
                        }
                    }
                }
                
            子组件
            props: {
                name: String,           //指定单一数据类型(限制数据类型)
                sex: [Number, String]   //指定多种数据类型
                age: {
                    type: Number,
                    default:18          //指定数据默认值
                },
                id: {
                    type: Number,
                    required: true      //指定数据必须
                },
                class:{
                    type: Object,
                    default: function() {   //如果传递的是对象或数组类型，定义默认数据时，要以方法和返回
                        return {
                            techer: "Li lee",
                            opt:"English"
                    
                        }
                    }
                }
            }
            
        子 ->  父 ： emit Event
            子组件
                <button @click="sendMsg">SUBMIT-MSG</button>
                data() {
                    return {
                        msg: "this is child msg"
                    }
                }
                methods: {
                    sendMsg(event) {
                        //$emit() 中包含两个参数：参数1=》key , 参数2=》数据；
                        this.$emit("sendmsg",this.msg)
                    }
                }
            父组件
                <Child @sendmsg="getMsg" />
                    //@sendmsg 这里绑定的是子组件所传递过来的KEY
                methods: {
                    getMsg: function(data) {
                        ...
                    }
                }
    
    插槽
        在父组件中定义部分子组件的内容
        父组件
            <ChildComponents>
                <p>this is a slot</p>
            </ChildComponents>
        子组件
            <template>
                <slot></slot>
            </template>
        //插槽中的内容样式，在子组件或父组件中定义都可以
        
        具名插槽
            当父子组件中有多个插槽时，可以给插槽定义名称，进行指定插入
            父组件
                <ChildComponents>
                    <div slot="slot1">
                        <p>this is a slot1</p>
                    </div>
                    <div slot="slot2">
                        <p>this is a slot2</p>
                    </div>
                </ChildComponents>
            子组件
                <template>
                    <slot name="slot1"></slot>
                    <slot name="slot2"></slot>
                </template>
                
        作用域名插槽
            子级向父级传递数据(即反向传递)
            子级
                <template>
                    <slot title="this is child data"></slot>
                </template>
            父级
                <ChildComponents>
                    <div slot-scope="props">
                        <p>{{props.title}}</p>
                    </div>
                </ChildComponents>
                //在2.5之前slot-scope必须用在template上，即
                    <template slot-scope="props">
                        <div>
                            <p>{{props.title}}</p>
                        </div>
                    </template>
                    
    动态组件
        父级
        <component v-bind:is="currentView"></component>
        <button @click="changView">切换组件</button>
        data() {
            currentView: "Components1"
        }
        components: {
            Components1,
            Components2,
        },
        methods: {
            changeView(){
                this.currentView="Components2"
            }
        }
        
        keep-alive      // 子件缓存
            <keep-alive>
                <component v-bind:is="currentView"></component>
            </keep-alive>
            //使用缓存里，不会再去渲染子组件，而是直接调用缓存数据
                
    过渡动画
        CSS过渡
            <button @click="show = !show">Start</button>
            <transition name="fade">
                <p>hello</p>
            </transition>
            data() {
                return {
                    show:true,
                }
            }      
            
            <style>
                .fade-enter-active,.face-leave-active{
                    transition:opacity .5s;
                }
                .fade-enter, .fade-leave-to{
                    opacity:0;
                }
                .fade-enter-to, .fade-leave {
                    opacity: 1;
                }
            </style>  
            
            过渡类名
                v-enter:过渡开始
                v-enter-acitve:过渡执行过程
                v-enter-to:过渡结束
                v-leave:离开开始
                v-leave-active:离开过程
                v-leave-to:离开结束    
        
        第三方动画库：Animate.css
            <button @click="show = !show">Toggle show</button>
            <transition name="bounce"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
                <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
            
            data: {
              show: true
            }
    
    自定义指令
        全局指令
            全局指令一般可定义在main.js中，供全局使用
            Vue.directive('focus',{
                // 当被绑定的元素插入到 DOM 中时……
                inserted: function (el) {
                // 聚焦元素
                el.focus()
                }
            }) 
            //focus 是自定义指令名称  
            使用时即
            <input type="text" v-focus />  
            
        局部指令
            directives: {
                focus: {
                    inserted: function (el) {
                      el.focus()
                    }
                }
            }   
            
    过滤器
        对插入信息进行指定样式过滤
        {{msg | msgChange}}
        data() {
            return {
                msg:20,
            }
        }
        filters: {      //定义过滤器
            //过滤方法
            msgChange: function(value) {
                return value + '...';
            }
        }
        
#AXIOS请求
    AXIOS文档：www.kancloud.cn/yunye/axios/234845
    github: https://github.com/axios/axios
    
    安装Axios
        cd vueprogram
        npm install axios --save
        或者直接引入axios.js
    
    使用axios
        在main.js中引入并挂载axios
            引入
            import Axios from 'axios'
            挂载
            Vue.prototype.$axios = Axios
        
        get请求
            //默认为GET请求
            data() {
                return {
                    apiData: []
                }
            }
            created() {     //页面加载时创建生命周期
                this.$axios("http://www.baidu.com/api.php",{
                    params: {   //传递参数
                        id: 10,
                        name: 'Li lee'
                    }
                })
                .then( res=> {
                    //成功处理
                    this.apiData = res.data
                })
                .catch( error=>{
                    //错误/失败处理
                    ....
                })
            }
            
        post请求
            form-data格式: ?name1=value1&name2=value2
            x-www-form-urlencoded格式：{name1:value1, name2:value2}
            Axios的POST请求格式应该为form-data格式，但请求URL与参数分开时，所默认的格式为x-www-form-urlencoded，所以这里需要用到第三方插件QS，将x-www-form-urlencoded转换为form-data
            import Qs form 'qs'
            data() {
                return {
                    apiData:[]
                }
            }
            created() {
                this.$axios.post("www.baidu.com/api.php", Qs.stringify({
                    name: 'le lee',
                    password: '111111'
                }))
                .then( res=>{
                    //成功处理
                    this.apiData = res.data
                })
                .catch( error=>{
                    ...
                })
            }
            //传递参数也可以直接放在URL后面
            
    全局Axios设置
        全局Axios设置可放在main.js入口文件中
        axios.default.baseURL = "http://www.aoogi.com";         //axios请求URL
        axios.default.headers.common['Authorization'] = AUTH_TOKEN;     //部分第三方或有时需要作者认证，一般时可不用加载
        axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';   //post请求头信息
    
    拦截器
        在请求或响应被then或catch处理前拦截他们
        添加在main.js中，为统一处理
        
        请求拦截器
        Axios.interceptors.request.use(function(config){
            //在发送请求前些处理
            ....
            return config;
        }, function(error){
            //对请求错误处理
            ....
            return Promise.reject(error);
        });
            //上面的 post请求时，需要进行form-data格式转换，是在VUE组件中进行的，这时里，就可以在请求拦截器中操作处理，当请求为post请求时，统一对请求参数进行form-data格式转换
                import qa form 'qs'
                Axios.interceptors.request.use(function(config){
                    if(config.method == 'post'){
                        config.data = qs.stringify(config.data)
                    }
                    return config;
                }, function(error){
                    //对请求错误处理
                    ....
                    return Promise.reject(error);
                });
        
        响应拦截器
        Axios.interceptors.response.use(function(response){
            //对响应数据处理
            ....
            return response;
        }, function(error){
            //对响应错误处理
            ....
            return Promise.reject(error);
        })
        
    跨域请求
        修改config 中的 index.js文件
            proxyTable: {
                "/api":{
                    target: "http:www.aoogi.com:3000",
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        添加HOST（在main.js）
            Vue.prototype.Host = '/api';
            //在配置了HOST时，Axios的全局配置文件axios.default.baseURL即不能存在
        //此种跨域解决方案，只适用于测试阶段，打包的时候，不会具备服务器，所以不能跨域，此时后端解决
            
#Mock:数据模拟

#Router路由
    Router初始化
        若在npm init webpack时，未选择安装router，可在后面再次安装vue-router
        安装
            npm install --save vue-router
        
        引用
            在main.js中
            import Router from 'vue-router'
            Vue.use(router)
            
        配置路由文件
            在main.js中
            var router =  new VueRouter({
                routes: [{
                    path: '/',
                    component: HelloWord
                }]
            })
            在new Vue中加入：router
                new Vue({
                  el: '#app',
                  router,
                  components: { App },
                  template: '<App/>'
                })
                
        视图加载位置
            <router-view></router-view>
            
        //在完整环境中，会将引入和配置文件进行提取，放入router下面的index.js文件中，在main.js中，导入router/index.js文件，但在main.js的new Vue中，依然要载入router.
    跳转
        字符串跳转
            <router-link to="/about">NavList</router-link>
            
        : 绑定跳转
            <router-link :to="urlData.home">NavList</router-link>
            <router-link :to="urlData.about">NavList</router-link>
            data(){
                return {
                    urlData:{
                        home:'/home'
                        about:'/about'
                    }
                }
            }
            //方便进行跳转地址的统一管理
            
        path跳转
            <router-link :to="{path:home}">NavList</router-link>
            <router-link :to="{path:urlData.home}">NavList</router-link>
            
        传参跳转
            //传参跳转时，在定义配置路由时，name为必须定义
            routes: [{
                path: '/home/:age',
                name:'home'
                component: HelloWord
            }]
            <router-link :to="{name:'home',params:{age:18}}">NavList</router-link>
            //目标页面
            <div>
                {{$route.params.age}}
            </div>
            
            
    嵌套
        children
        也要给定显示位置
        
        
插件安装

    awesome-swiper
        说明
            基本于VUE的SWIPER插件
        地址
            https://github.com/surmon-china/vue-awesome-swiper
        安装
            npm install vue-awesome-swiper --save
            
        配置信息(main.js)
            import VueAwesomeSwiper from 'vue-awesome-swiper'
            
            // require styles
            import 'swiper/dist/css/swiper.css'
            
            Vue.use(VueAwesomeSwiper, /* { default global options } */)
            
    lib-flexible
        说明
            基于移动端的弹性布局方案
        安装
            npm install lib-flexible --save
#vue方法
    data()      定义VUE页面数据
        data() {
            return {
                //......
                name: 'li'
            }
        }
        components:      //申明组件
            components:{
                Explate,        //简写形式
                Explate: Explate
            }
            
        mounted()        //钩子，在这发起后端请求，拿回数据，配合路由钩子做一些事情
            mounted() {
                this.name = 'Eall'
            }
            
        methods:        //常规方法定义
            methods: {
                function() {
                    //......
                }
            }
            
        computed:       //计算方法定义，与methods不同，computed会使用缓存机制
            computed: {
                function() {
                    //...
                }
            }
            
        props:          //定义父级传递数据,有数组和对象两种形式
            props: ['params1', 'params2']
            props: {
                params1: String,           //指定单一数据类型(限制数据类型)
                params2: [Number, String]   //指定多种数据类型
                params3: {
                    type: Number,
                    default:18          //指定数据默认值
                    required: true      //指定数据必须
                },
                params4:{
                    type: Object,
                    default: function() {   //如果传递的是对象或数组类型，定义默认数据时，要以方法和返回
                        return {
                            data1: "Li lee",
                            data2:"English"
                        }
                    }
                }
            }
            
        created()       //生命周期钩子的函数
            created() {
                .....
            }
#this
    在部分的第三方插件事件中（例swiper），this指向了例swiper对象，而并非指向了vue对象，而我们有例swiper对象中，有时需要调用vue对象，这个可以用 => 将this指向vue对象
    例
    data:{
        return {
            index: 0,
            swiper: {
                loop: false,
                on: {
                   click:() =>{             // 使用es6的箭头函数，使this指向vue对象
                        /**
                         * 通过$refs获取对应的swiper对象
                         * mySwiper 为在swiper中定义的ref
                         * <swiper :options="swiper" ref="mySwiper">
                         * swiper = this.$refs.mySwiper.swiper 也可以通过在外部定义实例化方法（如定义在computed）
                         */
                        let swiper = this.$refs.mySwiper.swiper;
                        this.index.swiper.activeIndex;
                   }
                }
            },
        }
    }
        
      
#LazyLoad   图片懒加载
    gitHub
        https://github.com/hilongjw/vue-lazyload
    安装
        npm install vue-lazyload --save-dev
        
    加载
        main.js引入
        import VueLazyLoad from 'vue-lazyload'
        //组件配置参数
        Vue.use(VueLazyLoad)
        //全局配置参数
        Vue.use(VueLazyLoad,{
            error:'./static/error.png',
            loading:'./static/loading.png'
        })
    使用
        v-lazy=""  代替src
        <img v-lazy="imgSrc" >
        例      
            <img v-lazy="imgSrc" >
            <img v-lazy="imgObj" >
            data() {
                return {
                    //配置项在组件中定义
                    imgObj:{    //引入图片如果在在js(即本地图片)，必须require引入
                        src: require('../assets/abc.png'),
                        load: require('../assets/load.png'),
                        error: require('../assets/error.png'),
                    }
                    //配置项在min.js中已经定义
                    imgSrc: 'http://www.aoogi.com/abc.png"
                }
            }
            
#Less
    less为css的一种预处理器，使用rem，以适应不同屏幕分辨率下的适应
    安装
        /**
         * 安装的内容有
         * less
         * less-loader 
         * style-loader
         * css-loader
         */
        npm install less less-loader style-loader css-loader --save-dev
    修改配置文件
        build/webpack.base.conf.js
        module: {
            rules: [
                ......
                {
                    test:/\.less$/,
                    //loader / use 加载方法使用一个就可以了
                    loader: "style-loader!css-loader!less-loader",
                    use:[        
                        "style-loader",
                        "css-loader",
                        "less-loader"
                    ]
                }
            ]
        }
        
    检查
        在/padkage.json中的devDependencies项中，查看less-loader、style-loader、css-loader是否安装成功
        
    使用
        定义lang="less"
        <template>
            <div>
            </div>
        </template>
        <style scoped lang="less">
            ....
        </style>
        
        
        
        
        
        
        
        
        
        
        