class Snake {
  snakeEle: HTMLElement
  // 蛇头
  header: HTMLElement
  bodys: HTMLCollection
  constructor() {
    this.snakeEle = document.getElementById('snake')
    this.header = document.querySelector('#snake>div')
    this.bodys = document.getElementById('snake').getElementsByTagName('div')
  }
  // 获取蛇的水平坐标(蛇头)
  getX() {
    return this.header.offsetLeft
  }
  // 设置蛇的水平坐标(蛇头)
  setX(value: number) {
    if (this.getX() === value) return
    if (value > 290 || value < 0) {
      throw new Error('蛇撞墙了')
    }
    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value) {
      if (value > this.getX()) {
        value = this.getX() - 10
      } else {
        value = this.getX() + 10
      }
    }
    this.moveBody()
    this.header.style.left = value + 'px'
    this.checkHeader()
  }
  // 获取蛇的垂直坐标(蛇头)
  getY() {
    return this.header.offsetTop
  }
  // 设置蛇的垂直坐标(蛇头)
  setY(value: number) {
    if (this.getY() === value) return
    if (value > 290 || value < 0) {
      throw new Error('蛇撞墙了')
    }
    if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value) {
      if (value > this.getY()) {
        value = this.getY() - 10
      } else {
        value = this.getY() + 10
      }
    }
    this.moveBody()
    this.header.style.top = value + 'px'
    this.checkHeader()
  }
  // 添加蛇身体的方法
  addBody() {
    const div = document.createElement('div')
    this.snakeEle.insertAdjacentElement('beforeend', div)
    // this.snakeEle.appendChild()
  }
  // 添加蛇身体移动的方法
  moveBody() {
    // 将后边的身体设置为前面一身体的位置
    for (let i = this.bodys.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let x = (this.bodys[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodys[i - 1] as HTMLElement).offsetTop;
      // 设置到前一个身体上
      (this.bodys[i] as HTMLElement).style.left = x + 'px';
      (this.bodys[i] as HTMLElement).style.top = y + 'px';
    }
  }
  //  检查头和身体相撞的方法
  checkHeader() {
    for (let i = 1; i < this.bodys.length; i++) {
      const bd = (this.bodys[i] as HTMLElement)
      if (this.getX() === bd.offsetLeft && this.getY() === bd.offsetTop) {
        throw new Error('撞到自己了')
      }
    }
  }
}
export default Snake