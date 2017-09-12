import $ from 'jquery'

export default class Button {
  constructor(selector) {
    this.button = $(selector)
	  this.target = ''
    this.className = ''

    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.toggle = this.toggle.bind(this)
    this.setEventListener = this.setEventListener.bind(this)
  }

  add() {
    this.target.addClass(this.className)
  }

  remove() {
    this.target.removeClass(this.className)
  }

  toggle() {
    this.target.toggleClass(this.className)
  }

  setEventListener({ actionType, target, className }) {
    let handler = null
    this.target = $(target)
    this.className = className
    switch (actionType) {
      case 'toggle':
        handler = this.toggle
        break
      case 'add':
        handler = this.add
        break
      case 'remove':
        handler = this.remove
        break
      default:
        break
    }
    this.button.on('click', (e) => {
      e.preventDefault()
      handler()
    })
  }
}
