import Food from './food'
import ScorePanpel from './scorePanpel'
import Snake from './snake'
// 游戏控制器,控制所有其他类
class GameControl {
  // 定义蛇
  snake: Snake
  // 定义食物
  food: Food
  // 定义计分板
  scorePanpel: ScorePanpel
  // 创建一个属性用来存储蛇的移动方向()
  direction: number
  // 创建一个属性用来记录游戏是否结束
  isLeave: boolean = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanpel = new ScorePanpel()
    this.init()
  }
  // 游戏的初始化方法
  init() {
    // 绑定键盘按下的事件
    document.addEventListener('keydown', this.handlerKeyDown.bind(this))
    this.run()
  }
  // 创建键盘按下的响应函数
  handlerKeyDown(event) {
    // 需要检查方向
    const keyNumber = event.keyCode
    this.direction = keyNumber
  }
  // 设置蛇移动的方法
  run() {
    let x = this.snake.getX()
    let y = this.snake.getY()
    /* 
     37 左
    38 上
    39 右
    40 下
   
     */
    switch (this.direction) {
      case 37:
        x -= 10
        break;
      case 38:
        y -= 10
        break;
      case 39:
        x += 10
        break;
      case 40:
        y += 10
        break;
    }
    this.checkEat(x, y)
    try {
      this.snake.setX(x)
      this.snake.setY(y)
    } catch (e) {
      this.isLeave = false
      alert(e.message + 'Game over')
    }


    // 开启定时调用
    this.isLeave && setTimeout(this.run.bind(this), 200 - (this.scorePanpel.level - 1) * 20)
  }
  // 定义一个方法,用来检查蛇是否吃到食物
  checkEat(x: number, y: number) {
    if (x === this.food.getX() && y === this.food.getY()) {
      this.food.change()
      this.scorePanpel.setScore()
      this.snake.addBody()
    }
  }
}
export default GameControl