import React, { Component } from 'react'

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'uskiValue'
        }
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                State : {this.state.key}
                <br/>
                Props : {this.props.kuch}
            </div>
        )
    }
}
export default Hello;