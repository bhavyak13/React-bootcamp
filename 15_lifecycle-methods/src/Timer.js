//componentDidMount
import React, { Component } from 'react'
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date(),
            })
        }, 1000)
    }
    componentDidUpdate(){
        console.log('Component did update!')
    }
    render() {
        return (
            <div>
                <h1>Timer</h1>
                {this.state.time.getSeconds()}
            </div>
        )
    }
}
export default Timer;