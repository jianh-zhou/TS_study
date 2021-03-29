// 定义食物类
class Food {
  // 定义 一个属性表示属性的元素
  element: HTMLElement
  constructor() {
    // 获取页面的food元素,并且赋值给element属性
    this.element = document.getElementById('food')
  }
  // 获取食物x坐标的方法
  getX() {
    return this.element.offsetLeft;
  }
  // 获取食物Y坐标的方法
  getY() {
    return this.element.offsetTop
  }
  // 修改食物的位置
  change() {
    // 食物随机生成一个数字
    const x = Math.round(Math.random() * 29) * 10
    const y = Math.round(Math.random() * 29) * 10

    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}
export default Food