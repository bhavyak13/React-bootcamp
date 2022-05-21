import React, { Component } from 'react'
import LotteryBall from './LotteryBall';
import './Lottery.css'

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls }),
        }
        this.clickHandle = this.clickHandle.bind(this);
    }
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40,
    }
    clickHandle() {
        let newNums = [];
        for (let i = 0; i < this.props.numBalls; i++) {
            newNums.push(Math.floor(Math.random() * this.props.maxNum) + 1);
        }
        this.setState({ nums: newNums });
    }
    render() {
        return (
            <div className='Container'>
                <h1>{this.props.title}</h1>
                <section className='Lottery-balls'>
                    {this.state.nums.map((n) => (
                        <LotteryBall num={n} />
                    ))}
                </section>
                <button onClick={this.clickHandle}>Generate</button>
            </div>
        )
    }
}
export default Lottery;