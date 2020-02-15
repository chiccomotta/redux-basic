import React, { Component } from "react"
import { connect } from "react-redux"
import {
  doDecrement,
  doIncrement,
  doIncrementBy10,
  doReset
} from "../reducers/actions"

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, increment, decrement, reset, increment10 } = this.props
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={increment}>
          +
        </button>
        <button type="button" className="btn btn-primary" onClick={decrement}>
          -
        </button>
        <button type="button" className="btn btn-success" onClick={reset}>
          RESET
        </button>
        <button type="button" className="btn btn-warning" onClick={increment10}>
          INCREMENT by 10
        </button>
        Clicked: {value} times &nbsp;
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { value: state.counter }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch(doIncrement()),
    decrement: () => dispatch(doDecrement()),
    increment10: () => dispatch(doIncrementBy10()),
    reset: () => dispatch(doReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
