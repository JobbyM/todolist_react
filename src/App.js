import React, { Component, Fragment } from 'react'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }

    this.handleBtnToggle = this.handleBtnToggle.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleBtnToggle}>toggle</button>
      </Fragment>
    )
  }

  handleBtnToggle() {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }
}

export default App
