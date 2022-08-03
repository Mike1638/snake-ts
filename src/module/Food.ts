// food 用来描述食物

class Food {
    public element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')
    }
    // 食物位置
    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }
    // 随机食物位置
    change() {
        const left = Math.round(Math.round(Math.random() * 29) * 10)
        const top = Math.round(Math.round(Math.random() * 29) * 10)
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`
    }
}



export default Food;