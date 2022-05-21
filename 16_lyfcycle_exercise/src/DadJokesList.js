import React, { Component } from 'react'
import './DadJokesList.css';
import axios from 'axios';
import Joke from './Joke';
class DadJokesList extends Component {
    static defaultProps = {
        numJokes: 10,
    }
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
            isloaded: false,
        }
        this.getJoke = this.getJoke.bind(this);
    }
    async getJoke() {
        this.setState({
            isloaded: false,
        })
        const url = 'https://icanhazdadjoke.com/';
        let jokes = [];
        let jokesText = [];
        while (jokes.length < this.props.numJokes) {
            const response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json',
                }
            })
            if (!jokesText.includes(response.data.joke)) {
                const newJoke = {
                    id: (response.data.id),
                    joke: (response.data.joke),
                    score: 0,
                }
                jokes.push(newJoke);
                jokesText.push(newJoke.joke);
            }
        }
        this.setState({
            jokes: jokes,
            isloaded: true,
        })
        window.localStorage.setItem('jokes', JSON.stringify(jokes))
    }
    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJoke();
        else {
            this.setState({
                isloaded: true,
            })
        }
    }
    voteUp = (id, delta = 1) => {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(joke => {
                if (joke.id === id) {
                    return { ...joke, score: joke.score + delta }
                }
                return joke;
            })
        }), () => {
            window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        })
    }
    voteDown = (id, delta = 1) => {
        this.setState(prevState => ({
            jokes: prevState.jokes.map(joke => {
                if (joke.id === id) {
                    return { ...joke, score: joke.score - delta }
                }
                return joke;
            })
        }))
    }
    clickHandler = () => {
        this.getJoke();
    }
    render() {
        let jokes = this.state.jokes;
        jokes.sort((a, b) => {
            if (a.score > b.score) return -1;
            else if (a.score < b.score) return 1;
            return 0;
        })
        return (
            <div>
                {this.state.isloaded
                    ? <div className='JokeList'>
                        <div className='JokeList-sidebar'>
                            <h1 className='JokeList-title'>Dad Jokes!!</h1>
                            <button className='JokeList-getmore' onClick={this.clickHandler}>Fetch New Jokes!</button>
                        </div>
                        <div className='JokeList-jokes'>
                            {jokes.map(e => (
                                <Joke
                                    key={e.id}
                                    score={e.score}
                                    joke={e.joke}
                                    id={e.id}
                                    voteUp={this.voteUp}
                                    voteDown={this.voteDown}
                                />
                            ))}
                        </div>
                    </div>
                    : <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            </div>
        )
    }
}
export default DadJokesList