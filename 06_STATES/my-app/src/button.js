import React, { Component } from 'react'
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => { alert("clicked!") }}>Click Me!</button>
            </div>
        )
    }
}
export default Button;