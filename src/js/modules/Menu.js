import $ from 'jquery'

export default class Menu {
  constructor(selector) {
    this.menu = $(selector)

    this.setEventListener = this.setEventListener.bind(this)
  }

  setEventListener({ actionType, callback }) {
  	const type = `transition${actionType}`
    this.menu.on(type, callback)
  }
}
