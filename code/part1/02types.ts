// 可以直接以字面量的形式声明,相当于声明了变量类型为对应字面量的类型
let b: 10;
b = 10
// 相当于声明变量c为
let c: 'male' | 'fmale'
c = 'male'
c = 'fmale'
// c="111" // 此行会报错,因为c变量只能为'male'和'famle'类型

// 相当于变量d类型为字符串或者布尔类型
let d: string | boolean;
d = '11'
d = false

type n = 1 | 2 | 3
let f: n;
f = 2
