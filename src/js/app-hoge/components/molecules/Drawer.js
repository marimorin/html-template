import React, { Component } from 'react'
import { render } from 'react-dom'

class ColorList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: [
        { id: 1, name: 'Apple', isChecked: false },
        { id: 2, name: 'Orange', isChecked: false },
        { id: 3, name: 'Grape', isChecked: false },
      ]
    }
  }

  handleToggleChecked(data) {
    let newFruits = this.state.fruits.map( (fruit) => {
      if (fruit.id === data.id) {
        fruit.isChecked = data.isChecked
      }
      return fruit
    })
    this.setState({
      fruits: newFruits
    })
  }

  componentWillReceiveProps(nextProps) {
    alert(nextProps)
  }

  render() {
    let listItems = this.state.fruits.map( (fruit) => {
      return (
        <ColorItem
          key={fruit.id}
          onToggleCompleted={ (data) => this.handleToggleChecked(data) }
          {...fruit} />
      )
    })
    return (
      <ul>{ listItems }</ul>
    )
  }
}

const ColorItem = props => {
  let { id, name, isChecked } = props
  let className = `fa fa-${isChecked ? 'dot-' : ''}circle-o`
  return (
    <li onClick={ () => props.onToggleCompleted({ id, isChecked: !isChecked }) }>
      <i className={className} /> {name}
    </li>
  )
}

render(
  <div>
    <ColorList />
  </div>,
  document.querySelector('#app-hoge')
)

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
//
// class PrimayLayout extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/company" exact component={CompanyPage} />
//           <Route path="/company/:id" exact component={CompanyPage} />
//           <Route path="/about" exact component={AboutPage} />
//         </Switch>
//       </div>
//     )
//   }
// }
//
// const Header = () => (
//   <header>
//     <h1 style={{ fontSize: "30px" }}>INDEX</h1>
//     <ul>
//       <li><Link to="/">HOME</Link></li>
//       <li><Link to="/company">COMPANY</Link></li>
//       <li><Link to="/about">ABOUT</Link></li>
//     </ul>
//   </header>
// )
//
// const HomePage = () => <div>HOME PAGE</div>
//
// const CompanyPage = (props) => (
//   <div>
//     <div>Company PAGE</div>
//     <p>{ props.match.params.id }</p>
//     <Switch>
//       <Route path="/company/hoge" exact render={ () => <div>Hoge</div> } />
//     </Switch>
//   </div>
// )
//
// const AboutPage = () => <div>About PAGE</div>
//
// const App = () => (
//   <BrowserRouter>
//     <PrimayLayout />
//   </BrowserRouter>
// )
// render( <App />, document.querySelector("#app-hoge") )
