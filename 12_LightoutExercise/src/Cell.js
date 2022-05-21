import React, { Component } from 'react'
import './Cell.css'

class Cell extends Component {
  clickHandle = () => {
    this.props.clicked(this.props.index);
  }
  render() {
    return (
      <button className={'Cell '.concat(this.props.value ? 'Cell-lit' : '')}
        onClick={this.clickHandle}>
      </button>
    )
  }
}
export default Cell;