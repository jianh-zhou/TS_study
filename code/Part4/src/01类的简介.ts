class Person {
  // 定义实例属性,如果前面加上一个readonly关键字,则表示该属性只读
  name: string = '猪八戒'
  age: number = 20

  // 定义类属性(静态属性),使用static关键字
  static sex: string = '男'
  // 定义方法
  sayHello() {
    console.log('hello')
  }

}
const person = new Person
console.log(person)
console.log(Person.sex)
console.dir(Person, 2)