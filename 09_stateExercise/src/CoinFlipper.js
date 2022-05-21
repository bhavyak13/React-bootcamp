import React, { Component } from 'react'
import './CoinFlipper.css'
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        //0 -> heads
        //1 -> tails
        coins: [
            "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq",
            "https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            coinValue: undefined,
            head: 0,
            tail: 0,
            flipCount: 0,
        }
    }
    clickHandle = () => {
        const val = Math.floor(Math.random() * 2);
        this.setState({
            coinValue: val,
        })

        val === 0
            ? this.setState((prevState) => ({ head: prevState.head + 1 }))
            : this.setState((prevState) => ({ tail: prevState.tail + 1 }))

        this.setState((prevState) => ({ flipCount: prevState.flipCount + 1 }))
    }
    render() {
        let src;
        if (this.state.coinValue !== undefined) {
            src = this.props.coins[this.state.coinValue];
        }
        return (
            <div>
                <Coin src={src} />
                <button onClick={this.clickHandle} disabled={this.state.flipCount < 10 ? false : true}>Flip!</button>
                <br/>
                flips:{this.state.flipCount}
                <br/>
                heads:{this.state.head}
                <br/>
                tails:{this.state.tail}
            </div>
        )
    }
}
export default CoinFlipper;