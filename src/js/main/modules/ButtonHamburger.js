import Button from './Button'

export default class ButtonHumberger extends Button {
  constructor(selector) {
    super(selector)
    if (this.element === null) { return }
    this.controls = (() => {
      let controls = this.element.getAttribute('aria-controls').split(',')
      return controls.map((control) => {
        let c = control.replace(' ', '')
        return document.querySelector(`#${c}`)
      })
    })()
    this.state = { expanded: this.element.getAttribute('aria-expanded') === 'true' }
  }
  handleClick(e) {
    super.handleClick(e)
    let expanded = !this.state.expanded
    this.element.setAttribute('aria-expanded', expanded)
    this.controls.forEach((control) => {
      if (control === null) { return }
      control.setAttribute('aria-hidden', !expanded)
    })
    this.state.expanded = expanded
  }
}

