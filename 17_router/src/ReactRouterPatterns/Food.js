import React, { Component } from 'react'
import './Food.css';
class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Here is your {this.props.name}</h1>
            </div>
        )
    }
}
export default Food