class Dog {
  name: string = '小黑'
  age: string
  // 构造函数,会在对象创建时调用
  constructor(age: string) {
    console.log('构造函数执行了')
    this.age = age
  }
  say() {
    console.log('汪汪')
  }
}
const dog = new Dog('www')
const dog1 = new Dog('33333')
const dog2 = new Dog('44444')
const dog3 = new Dog('55555')
console.log(dog)
console.log(dog1)
console.log(dog2)
console.log(dog3)