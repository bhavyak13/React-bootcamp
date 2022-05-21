import React, { Component } from 'react'
class Button2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        // this.handleClick = this.handleClick.bind(this);
        //if you dont wanna bind expicitly by wriiting above line then alternative
        //option is that you should define function by using arrow function syntax
        //as arroww function syntax will automatically bind the function to 'this' intance of class
    }
    // handleClick = () => {
    //     this.setState({ clicked: true });
    // }
    handleClick() {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "CLICKED!!!" : "Not clicked"}</h1>
                {/* <button onClick={() => { this.setState({ clicked: true }); }}>Click Me!</button> */}
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
export default Button2;