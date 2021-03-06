## 初始 Ts

#### 1 ts 的诞生原因

- 1 js 属于弱类型语言,动态类型语言,变量类型可变,在进行一些操作后,可能不会报错 ,但是在出现一些错误结果后,我们自己不知道,到后面代码体积大,出现问题就会很麻烦,需要自己再往回看,十分麻烦.维护成本高
- 2 函数参数类型不确定,而函数传递的参数会在函数内部进行操作,也会导致一些不可预估的错误发生

#### 2 ts 的起源

- 1 微软发明的一门语言,并不是替换 js 的,js 现在已经不是那么容易替换的,它是辅助 js 语言的.解决 js 动态类型的缺点,提升 js 的
- 2 一 js 基础构建的语言,一个 js 的超集,让 js 有动态类型语言变为静态类型语言,可以在任何支持 js 的平台中执行,ts 扩展了 js,并且添加了类型

#### 3 Ts 的特性

- 在大型项目中编写更适合
- 为了后期维护方便
- 浏览器只认识 js 文件,ts 不能直接在浏览器运行,需要进行编译为 js 才能执行

#### 4 TS 增加了什么

- 1 变量类型,可以使变量的类型固定,方便开发维护
- 2 添加 ES 不具备的新特性
- 3 支持 ES 的新特性
- 4 强大的开发工具
- 5 丰富的配置选项(可以指定编译成对应的 ES 版本,可以解决兼容性问题)

#### 5 声明变量类型

    ```js
    let a:number; //声明变量为数值类型
    a=10;
    a=20;

// a="1111" // 此行代码会报错,因为变量 a 已经声明为数值类型了,但是在编译时也是可以编译成功的,因为 js 是支持这种写法,方便我们习惯使用 ts,这种默认是编译成功的,可以进行配置后就不会编译成功了

// 可以设置参数类型,也可以设置函数返回值类型
function sum(c:number,d:number):number{
return c+d
}
let result=sum(10,11)

````

#### 6 TS 的类型

1 可以使用 | 来表示一个变量可以设置多个类型(联合类型)

```js
let a: string | boolean // 相当于a的类型可以是字符串类型或者是布尔类型
```

2 any 类型,该类型相当于关闭了 TS 的类型,就是相当于变量可以为任意类型,没有限制(any 类型尽量少用),该类型可以赋值给其他变量类型,从而其他变量的类型也会影响

```js
let a: any
let a // TS不申明变量类型,TS会自动判定为该变量any类型(隐式的any)
```

3 unknown 类型,表示未知类型的变量,该类型变量不可赋值给其他类型的变量,它相当于安全的 any 类型
4 void 类型 ,用来表示空,以函数为例,就表示该函数没有返回值
5 never 类型 表示用来不会返回结果,相当于与函数内部报错,里面的后续代码就不会执行,肯定就不会返回任何结果
6 object 类型

```js
// 声明一个变量a,类型为一个对象,里面必须有一个name属性,属性指类型为字符串,age属性可有可无.这个对象只能有这两个属性,
let a: { name: string, age?: number }
// 此时对象b里面必须有name属性,而且可以任意添加对象的类型 [propName:string]表示对象可以有任意属性,any表示属性值可以是任意类型
let b: { name: string, [propName: string]: any }

// 函数结果的类型声明
// 声明一个函数d,一定接收两个数字类型的实参,返回值也必须为数值类型
let d: (a: number, b: number) => number
d = function (a, b) {
  return a + b
}
```

7 Array 类型

```js
// 都表示声明一个数组类型的变量,并且里面的值都只能是字符串类型
  let a:string[]
  let Array<string>
```

8 tuple 类型(元组:固定长度的数组)

```js
// 声明一个类型为元组的变量,里面只能有两个元素,而且这两个元素的类型只能是字符串
let a: [string, string]
```

9 Enum 类型(枚举类型)

```js
 Enum Gender{
   Male,
   Fmale
 }
 let a:{name:string,gender:Gender}
 a={name:'孙五菱',gender:Gender.Male}
  // 可以将对应的数据的可能情况全部列举出来
```

#### 7 类型断言

用来告诉 TS 解析器的变量的真实类型,因为有时候它不知道变量的真实类型,可以会存在一定问题
写法:

- 1 e as string
- 2 <string> e
  两者都是类型断言,都表示 e 的类型为字符串类型

#### 8 &

```js
// 表示声明了一个对象a,里面必须有字符串的name属性而且也得与数值类型的age属性
let a: { name: string } & { age: number }
```

#### 9 类型别名

```js
//  给string类型取一个别名mytype
type mytype = string
let a: mytype
// 如果类型过长的话就可以使用类型别名,更加方便
type myType = 1 | 2 | 3 | 4
let a: myType
```
````
