import React, { Component } from 'react'
import './Joke.css';
class Joke extends Component {
    constructor(props) {
        super(props);
        this.voteUpHandler = this.voteUpHandler.bind(this);
        this.voteDownHandler = this.voteDownHandler.bind(this);
    }
    voteUpHandler() {
        this.props.voteUp(this.props.id);
    }
    voteDownHandler() {
        this.props.voteDown(this.props.id);
    }
    render() {
        return (
            <div className='Joke'>
                <i className="Joke-buttons fa-solid fa-thumbs-up" onClick={this.voteUpHandler}></i>
                <span className='Joke-votes'>{this.props.score}</span>
                <i className="Joke-buttons fa-solid fa-thumbs-down" onClick={this.voteDownHandler}></i>
                <span className='Joke-text'>{this.props.joke}</span>
            </div>
        )
    }
}
export default Joke