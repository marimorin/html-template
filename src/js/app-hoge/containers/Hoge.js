import React, { Component } from 'react'
import { connect } from 'react-redux'
// import App from '../components/App'
import { openDrawer, closeDrawer, toggleDrawer } from '../actions/drawer'
import { loadData } from '../actions/promise'

class Hoge extends Component {
  componentDidMount() {
    this.props.onMounted();
  }

  render() {
    const { status, data, error } = this.props;

    switch(status) {
      case 'LOADED':
        return (
          <div>
            <h1>{JSON.stringify(data)}</h1>
          </div>
        );
      case 'ERROR':
        return (
          <div>
            <h1>エラー</h1>
            <p>{error.message}</p>
          </div>
        );
      default:
        return <h1>読み込み中</h1>;
    }
  }
}

export default connect(
  state => ({
    status: state.promise.status || 'LOADING',
    data: state.promise.data,
    error: state.promise.error,
  }),
  dispatch => ({
    onMounted() {
      dispatch(loadData());
    },
  }),
)(Hoge);

// export default connect(
//   state => ({
//     openedDrawer: state.drawer.openedDrawer
//   }),
//   dispatch => ({
//     openDrawer() { dispatch(openDrawer()) },
//     closeDrawer() { dispatch(closeDrawer()) },
//     toggleDrawer() { dispatch(toggleDrawer()) },
//   })
// )(Hoge)

