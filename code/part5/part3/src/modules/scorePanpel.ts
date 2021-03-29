class ScorePanel {
  score = 0
  level = 1
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 设置一个变量用来限制最高等级
  maxLevel: number
  // 设置一个变量用来设置升级的规则
  upState: number
  constructor(maxLevel: number = 10, upState: number = 10) {
    this.scoreEle = document.getElementById('score')
    this.levelEle = document.getElementById('level')
    this.maxLevel = maxLevel
    this.upState = upState
  }
  // 设置一个加分的方法
  setScore() {
    this.scoreEle.innerHTML = ++this.score + ''
    // 判断是否升级
    if (this.score % this.upState === 0) {
      this.setLevel()
    }
  }
  // 设置一个加等级的方法
  setLevel() {
    if (this.level >= this.maxLevel) return
    this.levelEle.innerHTML = ++this.level + ''
  }
}

export default ScorePanel