import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            die1: 1,
            die2: 1,
            rolling: false,
        }
    }
    static defaultProps = {
        cn: [
            "fas fa-dice-one",
            "fas fa-dice-two",
            "fas fa-dice-three",
            "fas fa-dice-four",
            "fas fa-dice-five",
            "fas fa-dice-six",
        ]
    }
    handleClick() {
        this.setState({
            die1: Math.floor(Math.random() * 6) + 1,
            die2: Math.floor(Math.random() * 6) + 1,
            rolling: true
        });
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className='RollDice'>
                <section className="RollDice-container">
                    <Die class={this.props.cn[this.state.die1 - 1]} rolling={this.state.rolling}/>
                    <Die class={this.props.cn[this.state.die2 - 1]} rolling={this.state.rolling}/>
                </section>
                <button
                    onClick={this.handleClick}
                    disabled={this.state.rolling}
                    className="RollDice-button"
                >
                    {!this.state.rolling
                        ? "Roll Dice!"
                        : "Rolling.."
                    }
                </button>
            </div>
        )
    }
}
export default RollDice;