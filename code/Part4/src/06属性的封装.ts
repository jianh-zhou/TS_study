(function () {
  // 定义一个表示人的类
  class Person {
    private name: string
    private age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    getAge() {
      return this.age
    }
    setAge(value: number) {
      if (value < 0) return
      this.age = value
    }
    //  TS中使用getter的方法
    get _name() {
      return this.name
    }
    // Ts中使用setter的方法
    set _name(value: string) {
      this.name = value

    }
  }
  const h = new Person('小花', 20)
  console.log(h.getAge())
  h.setAge(-120)
  console.log(h)
  console.log(h._name)
  h._name = '小黑'
  console.log(h)
})()