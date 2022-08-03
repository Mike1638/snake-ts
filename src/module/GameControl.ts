import Snake from "./Snake";
import Food from "./Food";
import ScreenPanel from "./ScreenPanel";

//  游戏控制器
class GameControl {
    public food: Food;
    public snake: Snake;
    public screenpanel: ScreenPanel
    public direction: string = ''   //移动方向
    public isLive: boolean = true
    constructor() {
        this.food = new Food()
        this.snake = new Snake()
        this.screenpanel = new ScreenPanel()
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this)) //绑定this 
        this.run()
    }
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }
    //移动snake
    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
            case "UP": Y -= 10; break
            case "ArrowDown":
            case "Down": Y += 10; break
            case "ArrowLeft":
            case "Left": X -= 10; break
            case "ArrowRight":
            case "Right": X += 10; break
        }
        this.checkEat(X, Y)
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert('GG')
            this.isLive = false
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - 30 * (this.screenpanel.level - 1))
    }
    //确实是否吃到食物
    checkEat(X: number, Y: number) {
        if (this.food.X === X && this.food.Y === Y) {
            console.log('吃到了')
            this.food.change()
            this.screenpanel.addScore()
            this.snake.addBody()
        }
    }
}



export default GameControl