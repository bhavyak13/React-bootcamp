import React, { Component } from 'react'
import './CoinFlipper.css'
import Coin from './Coin';

class CoinFlipper2 extends Component {
    static defaultProps = {
        coins: [
            { value: "head", src: "https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq" },
            { value: "tail", src: "https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            head: 0,
            tail: 0,
            flipCount: 0,
        }
    }
    choice=(arr)=>{
        let randIndex=Math.floor(Math.random()*arr.length);
        return arr[randIndex];
    }
    clickHandle = () => {
        const coin = this.choice(this.props.coins);
        this.setState((prevState) => ({
            currCoin:coin,
            flipCount: prevState.flipCount + 1,
            head: prevState.head + (coin.value==='head'),
            tail: prevState.tail + (coin.value==='tail'),
        }))
    }
    render() {
        let src;
        if (this.state.currCoin !== null) {
            src = this.state.currCoin.src;
        }
        return (
            <div>
                <Coin src={src} />
                <button onClick={this.clickHandle} disabled={this.state.flipCount < 10 ? false : true}>Flip!</button>
                <br />
                flips:{this.state.flipCount}
                <br />
                heads:{this.state.head}
                <br />
                tails:{this.state.tail}
            </div>
        )
    }
}
export default CoinFlipper2;