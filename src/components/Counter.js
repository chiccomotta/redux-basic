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
      <p>
        Clicked: {value} times &nbsp;
        <button onClick={increment}>+</button>{" "}
        <button onClick={decrement}>-</button>{" "}
        <button onClick={reset}>RESET</button>{" "}
        <button onClick={increment10}>INCREMENT by 10</button>{" "}
      </p>
    )
  }
}

const mapStateToProps = state => {
  return { value: state }
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
