export default class Overlay {
  constructor(selector) {
    this.selector = selector
    this.element = document.querySelector(this.selector)
    if (this.element === null) { return }
    this.target = document.querySelector(`#${this.element.getAttribute('aria-labelledby')}`)
    this.init()
  }
  init() {
    if (this.target === null) { return }
    this.element.addEventListener('click', (e) => this.handleClick(e))
  }
  handleClick(e) {
    if (this.target === null) { return }
    let event = document.createEvent('HTMLEvents')
    event.initEvent('click', true, true)
    this.target.dispatchEvent(event)
  }
}

