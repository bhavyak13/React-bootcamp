import React, { Component } from 'react'
class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 }
    }
    
    singleClickHandler = () => {
        this.setState((prevState) => ({ score: prevState.score + 1 }))
    }
    tripleClickHandler = () => {
        this.setState((prevState) => {
            return { score: prevState.score + 3 }
        })
    }

    // incrementScore = (prevState) => {
    //     return { score: prevState.score + 1 }
    // }
    // singleClickHandler = () => {
    //     this.setState(this.incrementScore);
    // }

    render() {
        return (
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.singleClickHandler}>Single Kill</button>
                <button onClick={this.tripleClickHandler}>Triple Kill</button>
            </div>
        )
    }
}
export default Demo;