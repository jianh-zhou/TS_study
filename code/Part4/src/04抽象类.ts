(function () {
  /*  
    abstract 定义抽象类,该类只能供别人继承,不能自己直接new 创建对象
     抽象类可以添加抽象方法
  */
  abstract class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    say() {
      console.log('动物在叫')
    }
    /*  
    定义一个抽象方法,该方法相当于子类必须重写的方法,
    抽象方法使用abstract开头
    
     */
  }
  class Dog extends Animal {

    say() {
      console.log('汪汪汪')
    }
  }
  class Cat extends Animal {
    say() {
      console.log('喵喵喵')
    }
  }
  const dog1 = new Dog('小黄', 20)
  console.log(dog1)
  dog1.say()
  const cat = new Cat('小猫', 200)
  console.log(cat)
  cat.say()
}())