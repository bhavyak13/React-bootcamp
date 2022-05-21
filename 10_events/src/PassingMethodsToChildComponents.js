import React, { Component } from 'react'
import Number from './Number';
class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [1, 2, 3, 4, 5],
        }
        this.remove = this.remove.bind(this);
    }
    remove(num) {
        // console.log("REMOVE INSIDE")
        this.setState(prevState => ({
            nums: prevState.nums.filter(n => (n !== num))
        }))
        // console.log("REMOVE EXIT")
    }
    render() {
        return (
            <div>
                {this.state.nums.map(num => {
                    return <Number num={num} remove={this.remove} />
                })}
            </div>
        )
    }
}
export default NumberList;