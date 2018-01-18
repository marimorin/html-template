import React, { Component } from 'react'
import Articles from '../../containers/organisms/Articles'

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="p-front-recent">
          <h2 className="a-title-front-main">Recent</h2>
          <Articles />
        </section>
      </div>
    )
  }
}
