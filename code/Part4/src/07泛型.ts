function fn<T>(a: T): T {
  return a
}
fn(20) // 不指定泛型, TS可以自动对类型进行判断
fn<string>('哈哈') // 指定泛型
//  泛型可以定义多个
function fn2<S, A>(a: S, b: A): A {
  return b
}
fn2<string, number>('22', 11)

// 定义一个接口
interface twst {
  length: number
}
// 泛型可以继承接口,表示泛型必须是接口的实现类(子类)
function fn3<H extends twst>(a: H): H {
  return a
}
fn3({ length: 20 })
class MyClass<A>{
  name: A
  constructor(value: A) {
    this.name = value
  }
}
const t = new MyClass<String>('哈哈')