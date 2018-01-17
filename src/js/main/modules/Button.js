export default class Button {
  constructor(selector) {
    this.selector = selector
    this.element = document.querySelector(this.selector)
    if (this.element === null) { return }
    this.actionType = this.element.dataset.actionType;
    this.controls = (() => {
      let controls = this.element.getAttribute('aria-controls').split(',')
      return controls.map((control) => {
        let c = control.replace(' ', '')
        return document.querySelector(`#${c}`)
      })
    })()
    switch (this.actionType) {
      case 'toggle':
        this.state = { expanded: this.element.getAttribute('aria-expanded') === 'true' }
        break;
      case 'trigger':
        break;
      default: break;
    }
  }
  init() {
    if (this.element === null) { return }
    this.element.addEventListener('click', (e) => this.handleClick(e))
  }
  handleClick(e) {
    console.log(this.element)
    switch (this.actionType) {
      case 'toggle':
        let expanded = !this.state.expanded
        this.element.setAttribute('aria-expanded', expanded)
        this.controls.forEach((control) => {
          if (control === null) { return }
          control.setAttribute('aria-hidden', !expanded)
        })
        this.state.expanded = expanded
        break;
      case 'trigger':
        if (this.target === null) { return }
        this.controls.forEach((control) => {
          if (control === null) { return }
          let event = document.createEvent('HTMLEvents')
          event.initEvent('click', true, true)
          control.dispatchEvent(event)
        })
        break;
      default: break
    }
  }
}

