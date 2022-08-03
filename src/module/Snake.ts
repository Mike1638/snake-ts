class Snake {
    public element: HTMLElement
    public head: HTMLElement
    public bodies: HTMLCollection
    constructor() {
        this.element = document.getElementById('snake')
        this.head = document.querySelector('#snake > div')  // snake下第一个div为head
        this.bodies = this.element.getElementsByTagName('div')// snake下所有的div为body
    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }

    set X(value: number) {
        if (this.X === value) { return }
        if (value < 0 || value > 290) {
            throw new Error('你屎到临头了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (this.Y === value) { return }
        if (value < 0 || value > 290) {
            throw new Error('你屎到临头了')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
    }

    addBody() {//在这个元素当中最后一个元素的末尾添加div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}



export default Snake;