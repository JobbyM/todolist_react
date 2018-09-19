import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          onEntered={(el)=> {el.style.color = 'red'}}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
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
