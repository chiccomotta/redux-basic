import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doDecrement, doIncrement, doReset } from '../reducers/actions'

class Counter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, increment, decrement, reset } = this.props
    return (
      <p>
        Clicked: {value} times &nbsp;
        <button onClick={increment}>+</button>{' '}
        <button onClick={decrement}>-</button>{' '}
        <button onClick={reset}>RESET</button>{' '}
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
    reset: () => dispatch(doReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
