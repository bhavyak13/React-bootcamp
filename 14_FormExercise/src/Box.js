import React, { Component } from 'react'
class Box extends Component {
    handleClick = () => {
        this.props.removeBox(this.props.id);
    }
    render() {
        return (
            <div>
                <div style={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.backgroundColor,
                    display:'inline-block'
                }}>
                </div>
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
}
export default Box;