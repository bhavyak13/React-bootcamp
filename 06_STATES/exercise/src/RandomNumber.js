import React, { Component } from 'react'

class RandomNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }
    handleClick = () => {
        this.setState({
            num: Math.floor(Math.random() * 10) + 1,
        })
    }
    render() {
        let body;
        if (this.state.num === 7) {
            body = <h3>You WIN!!</h3>
        } else {
            body = <button onClick={this.handleClick}>Random Number</button>
        }

        return (
            <div>
                <h1>{this.state.num}</h1>
                {body}
            </div>
        )
    }
}
export default RandomNumber;