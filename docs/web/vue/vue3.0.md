## 为什么要升级Vue3

Vue2.x中所有数据都定义在data中，方法定义在methods中，并且使用this来调用对应的数据和方法。

## Async/Await

是Javascript编写异步程序的新方法。以往的异步方法无外呼回调函数和Promise,但是async、await建立于Promise之上。

##### 简介：

- 是异步代码的新方式、基于Promise实现
- 使得异步代码更像同步代码；只能在async函数中使用，不能在普通函数中使用
- 关键字后面必须跟Promise对象
- 函数执行到await后，Promist函数执行完毕，但Primise内部一般都是异步函数，所以时间循环会一直await,直到事件轮询检查到Promise有了状态resolve或reiect才重新执行这个函数后面的内容

##### 用法：

- async函数返回一耳光Promise对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就先返回一个Promise对象，等到异步操作完成，在接着执行函数体内后面的语句。

  ```js
  async function timeout(ms) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 50);
  ```

```js
async function f(){
	let promise = new Promise((resolve,reject) =>{
		setTimeout(()=>resolve("done"),1000)
	})
	let result = await promise;  //等待，直到promise resolve（*）
	alert(resllt)  //"done"
}
f()
```



## 生命周期的变化

Vue2     --->    Vue3

beforeCreate     -- 	setup

created			   --	 setup

beforeMount	--	  onBeforeMount

mounted		-- 		onMounted

beforeUpdate     --    onBeforeUpdate

## 认识Composition API

### reactive  ref  toRefs  watch   watchEffecf computed    生命周期

#### 1：setup

##### setop执行是在 beforeCreate和created之前执行，执行时尚未创建组件实例，在这里没有this

##### 使用setop时，接收2个参数：

​		**props：**组件传入的属性

​		**context：**提供了this中常用的三个属性【attrs属性、slo插槽t、emit事件】--【每次自动同步最新的值】

```vue
<div pi='aaa'>
export default defineComponent({
	setup(props,context){
		consolo.loe(props.p1) //aaa
	}
})
```

setop中接收的props是响应式的，当传入新的props时，会被及时更新。由于是响应式的，所以不能使用ES6解构，结构会消除它的响应式。

在开发中，想要使用【解构，还能保持props的响应式】可以使用toRefs

#### 2：reactive、ref和toRefs

**在vue2.x中，定义数据都是在data中，但是vue3.x可以使用recative和ref来进行定义**

##### ref用法：

```vue
setup(){
	const obj=ref({count:1,name:'张三'})
	setTimeout(()=>{
		obj.value.count = obj.value.count +1
		obj.value.name = '李四'
	},1000)
	return{
		obj
	}
}
//将obj.conunt和obj.name绑定到页面上；但是reactive函数确实可以代理一个对象，但是不能代理基本类型，例如：字符串、数字、boolean等
```

##### ref、reactives用法：

reactives作用于一个对象，返回这个对象的一个响应式副本。通过这个新的函数我们可以任意给数据增加响应式的特性。而且这个特性不会应为参数传递而消失。

reactives()  函数接收一个普通对象，返回一个响应式的数据对象。

ref()  函数用来根据给定的值创建一个响应式的数据对象，ref() 函数调用的返回值是一个对象，这个对象上只包含一个value属性。

```vue
<template>
	<p> 第{{year}}年 </p>
	<p> 姓名：{{uesr.name}} </p>
	<p> 年龄：{{uesr.age}} </p>
	<p> 性别：{{uesr.gender}} </p>
</template>
<script>
	import {defineComponent,reactive,ref} from 'vue';
	export default defineComponent({
		setop(){
			const year = ref(0)
			const user = reactive({name:'小明',age:26,gender:'男'})
			setInteravl(()=>{
				year.value ++
				year.age ++
			},1000)
			return{
				year,
				user
			}
		}
	})
</script>
```

使用user.name，user.age这样写很繁琐，不能直接解构，会消除响应式。

##### toRefs解决以上问题：

```vue
return{
	year,
	...toRefs(user)  //解构对象数据
}
```

##### isRef的用法：

isRef()  用来判断某个值是否为ref（）创建出来的对象；

应用场景：当需要展开某个可能未ref（）创建出来的值得时候

```vue
import {ref,isRef} from 'vue'
setup(){
	const foo = ref(0)
	const ifFoo = isRef(foo) ? foo.value : foo
	console.log(isFoo) //0
}
```



#### 3：watch与watchEffect的用法

**watch函数是用来侦听特定的数据源，并在回调函数中执行副作用。默认情况下是惰性的，也就是说仅在侦听的数据源变更时才执行回调。**

##### 3.1：watch( source, callback, [options])   //接收三个参数

参数说明：

- source：可以支持String，Object，Function，Array用于指定要侦听的响应式变量
- callback：执行的回调函数
- options：支持deep，immediate和flush选项

```vue
import {defineComponent,fef,reactive,toRefs,watch} from 'vue'
export default defineComponent({
	setup(){
		const state = reactive ({name:'小王',age:20})
		setTimeout(()=>{
			state.age ++
		},1000)
		//修改age值时会触发，watch的回调
		watch(()=>state.age,(curAge,preAge)=>{
			console.log("新值:", curAge, "老值:", preAge)
		})
		return{
			...toRefs(state)
		}
	}
})
```

###### 1：侦听ref定义的数据

```vue
const year =ref(0)
setTimeout(()=>{
	year.value ++
},1000)
watch(year,(newVal,oldVal)=>{
	console.log("新值:", newVal, "老值:", oldVal);
})
```

###### 2：侦听多个数据

```vue
watch([()=>state.age,year],([curAge,preAge],[newVal,oldVal])=>{
	console.log("新值:", curAge, "老值:", preAge);
    console.log("新值:", newVal, "老值:", oldVal);
})
```

###### 3：侦听复杂的嵌套对象

```vue
const state = reactive({
	room:{
		id:100,
		attrs:{
			size:'140平米'，
			type：'三室两厅'
		}
	}
})
watch(()=>state.room,(newType,oldType)=>{
	console.log("新值:",newType,"老值:",oldType)
},{deep:true})
//如果第三个参数不使用deep:true；是无法监听到数据变化的
```

##### 3.2：watchEffect

```vue
import {defineComponent,ref,reactive,toRefs,watchEffecf} from 'vue'
export default defineComponent({
	setup(){
		const state = reactive({name:'小李'，age:22})
		let year = ref(0)
		setInterval(()=>{
			state.age ++
			year.value ++
		},1000)
		watchEffect(()=>{
			console.log(state)
			console.log(year)
		})
		return{
			...toRefs(state)
		}
	}
})
//watchEffect会自动收集依赖，只要指定一个回调函数。在组件初始化时，会先执行一次来收集依赖，然后当收集到的依赖发生变化时，就会再次执行回调函数。
 - watchEffect 不需要手动传入依赖
 - 会先执行一次来自动收集依赖
 - 无法获取到变化前的值，只能获取变化后的值
```

#### 4：computed

##### 1：创建只读属性

```vue
import { computed,ref }from 'vue'
setup(){
	//创建一个ref响应式数据
	const count ref(1)
	//根据count的值，创建一个响应式的计算属性plusOne
	//它会根据依赖的ref自动计算并返回一个新的ref
	const plusOne = computed(()=>count.value +1)
	console.log(plusOne.value)  //输出2
	return {count,plusone}
}
```

##### 2：创建可读可写的计算属性

```vue
const count2 = ref(1)
//创建一个computed 计算属性
const plusTwo = computed({
	//取值函数
	get:() =>count2.value +1
	//赋值函数
	set:() =>{
		count.value = value -1
	}
})
//为计算属性赋值操作，会触发set函数
plusTwo.value =9
//触发set 函数后，count 的值会被更新
console.log(count2.value)  //输出8
```

























