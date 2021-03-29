(function () {
  // 接口,用来一个类的结构
  //  接口也可以进行类型声明
  // 使用接口定义类型可以在之前的类型下再声明一次,相当于添加
  interface myInterface {
    name: string;
    age: number;
  }
  /* 
    接口中所有的属性都不能有实际的值
    在接口中的所有方法都是抽象方法
   */
  interface myInter {
    name: string
    sayHello(): void
  }
  /* 
    定义一个类时,可以实现一个接口
    使用inplements关键字,相当于继承类
   */
  class myClass implements myInter {
    name = '哈哈'
    sayHello() {
      console.log('你好啊')
    }
  }
})();