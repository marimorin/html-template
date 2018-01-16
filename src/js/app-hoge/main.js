import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class PrimayLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/company" exact component={CompanyPage} />
          <Route path="/company/:id" exact component={CompanyPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </div>
    )
  }
}

const Header = () => (
  <header>
    <h1 style={{ fontSize: "30px" }}>INDEX</h1>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/company">COMPANY</Link></li>
      <li><Link to="/about">ABOUT</Link></li>
    </ul>
  </header>
)

const HomePage = () => <div>HOME PAGE</div>

const CompanyPage = (props) => (
  <div>
    <div>Company PAGE</div>
    <p>{ props.match.params.id }</p>
    <Switch>
      <Route path="/company/hoge" exact render={ () => <div>Hoge</div> } />
    </Switch>
  </div>
)

const AboutPage = () => <div>About PAGE</div>

const App = () => (
  <BrowserRouter>
    <PrimayLayout />
  </BrowserRouter>
)
render( <App />, document.querySelector("#app-hoge") )
