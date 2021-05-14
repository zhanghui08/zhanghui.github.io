# Vue友最爱的10个开箱即用的开源项目

### iview

​	网站: [iviewui.com/](https://iviewui.com/)

​	iView是一套基于Vue.js的高质量UI组件库，可靠文档是其一大优势，用来快速构建web项目，相对友好的API更	好的服务于Vue友们，目前已更新到4.0版本。

### CSSFX

​	网站：https://github.com/jolaleye/cssfx

​	这是一个极具匠心的设计，每一个效果都具备流动性、简单性和易用性。让广大Vue友快速使用相关button动    	效，让web呈现更加丰富。即可应对业务需求，也可自我提升实现。

### uiGradients

​	网站：[uigradients.com/](https://uigradients.com/)

​	GitHub的：[https：//github.com/ghosh/uiGradients](https://juejin.cn/post/https：//github.com/ghosh/uiGradients)

​	这是一个CSS实现的线性渐变的效果集合，预览的每一个效果都可以复制源码开箱即用。

### Day.js

网站：https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/README.zh-CN.md

Day.js 是一个轻量的处理时间和日期的 JavaScript 库

### Axios常用的接口请求库

网站：https://github.com/axios/axios

# Vue项目总结

### Javascript相关

- 数组常用方法：
  - 遍历：forEach(), map(), fillter(), every(), some(), reduce()
  - 操作方法：solice(), slice(), push(), shift(), pop(), sort()
- 基本数据结构：
  - 引用类型（对象、数组）
- 基本逻辑运算符：
  - if else(){}
  - switch
  - 三目运算
  - for/while循环
- 常见的字符串api：
  - replace    slice    substr    index of
- 变量作用域，作用域链，变量提升，函数声明提升
- 对象基本使用，面向对象编程

### css相关

##### 常用布局 https://juejin.cn/post/6907027007318687751

- 基本盒模型（border、content、padding等）
- 4种常见的定位（static、absolute、relative、fixed）
- 常见的布局方式（浮动布局、弹性盒布局flex、自适应布局、网格布局grid）
- css3基本样式与动画（transition、animation）

### vue相关

##### 1：生命周期

​		**created：**data和methods初始化完毕，此时可以使用methods中的方法和data中的数据

​		**mounted：**此项Vue实例初始化完成，DOM还未挂载完毕，可以直接操作DOM或者第三方dom库

##### 2：常用指令

​		v-bind：用户响应式的更新HTML元素

​		v-if：根据表达式的值真假来决定是否插入/移除元素

​		v-on：用于监听DOM事件

​		v-show：用于决定是否展示该元素，底层通过display:nones实现

​		v-html：在dom内插入html元素

​		v-for：数据循环

​		v-text：渲染制定dom的内容文本

##### 3：常用的修饰符及作用

###### 		3.1：事件修饰符

​			.stop 阻止事件冒泡

​			.prevent 阻止事件默认行为

​			.self 事件绑定的元素本身触发时才触发回调

​			.once 事件只能触发一次，第二次就不会再触发了

​			.native 将一个vue组件变成一个普通的html元素，使其可以监听click等原生事件

​			<Tag @click.native="handleClick">ok</Tag>

###### 		3.2：表单修饰符

​			.lazy 在输入框输入完内容，光标离开才更新视图

​			.trim 过滤首尾空格

​			.number  如果先输入数字，那它就会限制你输入的只能数数字，如果先输入字符串，那就相当于没有			加.numer<input type="text" v-model.trim="value">

##### 4：vue实现按需加载组件	

​			使用 () => import()

```vue
<template>
    <div>
       <ComponentA />
       <ComponentB />
    </div>
</template>
<script>
const ComponentA = () => import('./ComponentA')
const ComponentB = () => import('./ComponentB')
export default {
    // ...
    components: {
    ComponentA, 
    ComponentB 
    },
    // ...
}
</script>
```

##### 5：vuex的属性和作用

Vuex是一个专门为vue.js应用程序开发的状态管理模式。它采用集中储存管理应用的所有组件状态，并以相应的规则保证状态以一种可预测的方式发生变化。	

state的改变完全由mutation控制，我们也没必要任何项目都使用vuex，对于中大型项目，需要共享的状态跟多时，使用vuex才是最佳的选择。

- state单一状态树，用一个对象就包含了全部的应用层级状态，并且作为一个唯一数据源而存在

- getter就像计算属性一样，getter的返回值会根据它的依赖缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

```vue
const store = new Vuex.Store({
	state:{
		todos:[
			{id:1,text:'...',done:true}
			{id:2,text:'...',done:false}
		]
	},
	getters:{
		doneTodos:state =>{
			return state.todos.filter(todo =>todo.done)
		}
	}
})
//访问getters里的属性
this.$store.getters.doneTodos
```

- Mutation更改Vuex的store中的状态的唯一方法

```
const store= new Vuex.Store({
	state:{
		num:1
	},
	mutatios:{
		add(state){
			state.num ++    //变更状态
		}
	}
})
//在项目中使用mutation
store.commit('add')
//添加额外参数
store.commit('add',10)
```

- Action 提交的是mutation，而不是直接变更状态，可以包含任意异步操作。

```
const store = new Vuex.Store({
	state:{
		num:0
	},
	mutations:{
		add(atste){
			num ++
		}
	},
	actions:{
		add(context){
			context.commit('add')
		},
		asyncAdd({commit}){
			setTimeout(()=>{
				commit('add')
			})
		}
	}
})
//分发 action
store.dispatch('add')
//异步
store.dispatch('asyncAdd')
//异步传参
store.dispatch('asyncAdd',{num:10})
```

##### 6：vue-router基本使用模式和导航钩子

以下案例是静态路由配置和导航钩子的用法（如何加载路由组件，动态加载路由组件，404页面路由配置，路由导航钩子使用）。如果在后台管理系统，往往会涉及到权限系统，所以一般采用动态路由配置，通过前后端约定的路由方式，路由配置文件更具不同用户的权限由后端处理后返回。

```
// router.ts
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/admin/Home.vue';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: (to, from, next) => {
        next();
      },
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '',
          name: 'header',
          component: () => import(/* webpackChunkName: "header" */ './views/admin/subpage/Header.vue'),
        },

        {
          path: '/banner',
          name: 'banner',
          component: () => import(/* webpackChunkName: "banner" */ './views/admin/subpage/Banner.vue'),
        },
        {
          path: '/admin',
          name: 'admin',
          component: () => import(/* webpackChunkName: "admin" */ './views/admin/Admin.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta:{
        keepAlive:false //不需要被缓存的组件
      }
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue'),
    },
  ],
});

// 路由导航钩子的用法
router.beforeEach((to, from, next) => {
  if(from.path.indexOf('/preview') < 0) {
    sessionStorage.setItem('prevToPreviewPath', from.path);
  }
  next();
})

export default router
```

##### 7：对指定页面使用keep-alive路由缓存

keep-alive是vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

###### 	7.1通过路由配置文件和router-view

```
// routes 配置
export default [
  {
    path: '/A',
    name: 'A',
    component: A,
    meta: {
      keepAlive: true // 需要被缓存
    }
  }, {
    path: '/B',
    name: 'B',
    component: B,
    meta: {
      keepAlive: false // 不需要被缓存
    }
  }
]
```

路由视图配置：

```
// 路由设置
<keep-alive>
    <router-view v-if="$route.meta.keepAlive">
        <!-- 会被缓存的视图组件-->
    </router-view>
</keep-alive>

<router-view v-if="!$route.meta.keepAlive">
    <!-- 不需要缓存的视图组件-->
</router-view>
```

###### 7.2  通过router-view的key属性

```
<template>
  <div id="app">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
@Component
export default class App extends Vue {
  get key() {
    // 缓存除预览和登陆页面之外的其他页面
    console.log(this.$route.path)
    if(this.$route.path.indexOf('/preview') > -1) {
      return '0'
    }else if(this.$route.path === '/login') {
      return '1'
    }else {
      return '2'
    }
  }
}
</script>
```

##### 8：常用工具函数总结

- 识别ie浏览器

```
export const isIe =()=>{
	let explorer = window.navigator.userAgent
	//判断ie
    if(explorer.indexOf("MSIE") >0){
    	return true
    }else{
    	return false
    }
}
```

- 获取url参数对象

```
export const getQueryString =()=>{
	let qs=locattion.href.split('?')[1] || '',
	args= {}
	items = qs.length ? qs.split('&'):[]
	items.forEach((item,i)=>{
		let arr = item.split('=')
			name = decodeURLComponent(arr[0])
			value = decodeURLComponent(arr[1])
			name.length && (args[name] =value)
	})
	return args
}
```

- 解析url参数

```
export const paramsToStringify = (params) =>{
	if(parmas){
		let query = []
		for(let key in params){
			query.push(`${key}=${params[key]}`)
		}
		return `${query.join('&')}`
	}else{
		return ''
	}
}
```

- 将数据转化为数组

```
export const toArray = (data)=>{
	return Array.isArray(data)?data:[data]
}
```

- 带参数跳转

```
/**
 *  带参数跳转url（hash模式）
 * @param {String} url 
 * @param {Object} params 
 */
export const toPage = (url, params) => {
    if(params){
        let query = [];
        for(let key in params){
            query.push(`${key}=${params[key]}`)
        }
        window.location.href = `./index.html#/${url}?${query.join('&')}`;
    }else{
        window.location.href = `./index.html#/${url}`;
    }
}
```

- 控制字符串显示，超出制定字数则显示省略号

```
/**
 * 指定字符串 溢出显示省略号
 * @param {String} str
 * @param {Number} num
 */
 export const getSubStringSum = (str = '',num=1)=>{
 	let newStr
 	if(str){
 		str = str+'';
 		if(str.trim().length >num){
 			newStr = str.trim().substring(0,num) + "..."
 		}else{
 			newStr = str.trim()
 		}
 	}else{
 		newStr = ''
 	}
 	return newStr
 }
```

- 生成指定格式的时间字符串

```
/**
 * 生成指定格式的时间
 * @param {*} timeStemp 时间戳
 * @param {*} flag 格式符号
 */
export function formatTime(timeStemp, flag) {
    let time = new Date(timeStemp);
    let timeArr = [time.getFullYear(), time.getMonth() + 1, time.getDate()];
    return timeArr.join(flag || '/')
}
```

##### 9：基于axios二次封装一个具有请求、响应拦截的http请求

```js
import axios from 'axios'
import qs from 'qs'

//请求拦截
axios.interceptors.request.use(config =>{
    //此处可以加懒加载
    return config
},error =>{
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response =>{
    return response
},error =>{
    return Promise.resolve(error.response)
})

function checkStatus(response){
    //此处可以封装一些懒加载
    //如果http状态码正常，则直接返回数据
    if(response){
        if(response.status === 200 || response.status === 304){
            return response.data
            //如果不需要data之外的数据，可以直接return response.data
        }else if(response.status === 401){
            location.href = '/login'
        }else{
            throw response.data
        }
    }else{
        throw{data:'网络错误'}
    }
}

//axios默认参数配置
axios.defaults.baseURL = '/api/v0'
axios.defaults.timeout = 10000

//restful API封装
export default{
    post(url,data){
        return axios({
            method:'post',
            url,
            data:qs.stringify(data),
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then((res)=>{
                return checkStatus(res)
            })
    },
    get(url,params){
        return axios({
            method:'get',
            url,
            params, //get请求市时携带的参数
            headers:{
                'X-Request-With':'XMLHttpRequest'
            }
        }).then((res)=>{
            return checkStatus(res)
        })
    },
    del(url,params){
        return axios({
            method:'delete',
            url,
            params, //get请求市时携带的参数
            headers:{
                'X-Request-With':'XMLHttpRequest'
            }
        }).then((res)=>{
            return checkStatus(res)
        })
    },
}
```

##### 10：原生js实现简单的双向数据绑定

```html
<body>
    <div id="app">
    	<input type="text" id="txt"/>
        <p id="show"></p>
    </div>
</body>
<script>
	var obj = {}
    Object.defineProperty(obj,'txt',{
        get:function(){
            return obj
        },
        set:function(newValue){
            document.getElementById('txt').value = newValue
            document.getElementById('show').innerHTML = newValue
        }
    })
    document.addEventListener('keyup',function(e){
        obj.txt = e.target.value
    })
</script>
```

##### 11：Vue路由实现：hash模式和history模式

hash模式：在浏览器中以“#”出现，用window.location.hash读取

​					hash虽然在URL中，但不被包括在HTTP请求中，用来指导浏览器动作，对服务器安全无用，hash不					会重加载页面。hahs模式下，仅hash符号之前的内容会被包含在请求中，如www.baidu.com，对于					后端来说，即使没有做到对路由的全覆盖，也不会返回404错误。

history模式：采用heml5的新特性，且提供了2个新方法：pushState()    replaceState()可以对浏览器历史记录栈						进行修改，以及popState事件的监听到状态变更。

##### 12：Vue自定义一个过滤器

```
//html代码
	<div id="app">
		<input type="text" v-model="msg"/>
		{{msg |capitalize}}
	</div>
//js代码
	var vm=new Vue({
		el:"#app",
		data:{
			mag:'定义过滤器'
		},
		filters:{
			capitalize:function(value){
				if(!value) retirn ''
				value = value.toString()
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
	})
```

```
//在main.js中定义全局过滤器
    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
```

##### 13：vue项目中使用token的身份验证的简单实践

https://juejin.cn/post/6844903785257500679









