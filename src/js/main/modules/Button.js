export default class Button {
  constructor(selector) {
    this.selector = selector
    this.element = document.querySelector(this.selector)
    this.init()
  }
  init() {
    if (this.element === null) { return }
    this.element.addEventListener('click', (e) => this.handleClick(e))
  }
  handleClick(e) {
    console.log(this.element)
  }
}

