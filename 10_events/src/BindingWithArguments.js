import React, { Component } from 'react'
class Demo extends Component {
    static defaultProps = {
        colors: [
            'red', 'blue', 'green', 'purple', 'white'
        ]
    }
    state = {
        color: 'white',
    }
    handleClick = (newColor) => {
        this.setState({
            color: newColor,
        })
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.color, padding: '5rem' }}>
                {this.props.colors.map(color => (
                    <button style={{ backgroundColor: color }} onClick={this.handleClick.bind(this, color)}> Click ME!</button>
                ))}
            </div>
        )
    }
}
export default Demo;