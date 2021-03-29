(function () {
  class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    say() {
      console.log('动物在叫')
    }
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