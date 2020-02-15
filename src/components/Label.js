import React, { Component } from "react"
import { connect } from "react-redux"

class Label extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value } = this.props
    return (
      <div className="container">
        <p>{value}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { value: state.counter }
}

export default connect(mapStateToProps, null)(Label)
