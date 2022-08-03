//ScreenPanel 来描述积分面板

class ScreenPanel {
    // 初始化
    public score: number = 0;
    public level: number = 1;
    public scoreEle: HTMLElement;
    public levelEle: HTMLElement;
    public maxLevel;// 限制等级
    public upScore;//升级条件
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')
        this.levelEle = document.getElementById('level')
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 积分修改
    addScore() {
        this.scoreEle.innerHTML = 'Score:' + ++this.score;
        if (this.score % this.upScore === 0) {
            this.Levelup()
        }
    }
    // 等级修改
    Levelup() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = 'Level:' + ++this.level;
        }
    }
}


export default ScreenPanel;