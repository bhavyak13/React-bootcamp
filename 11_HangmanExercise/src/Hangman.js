import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from './words';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
  }

  win = () => {
    for (let i = 0; i < this.state.answer.length; i++) {
      if (!this.state.guessed.has(this.state.answer[i])) {
        return false;
      }
    }
    return true;
  }
  lose = () => {
    return (this.state.nWrong > this.props.maxWrong)
  }
  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }


  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        className="Hangman-alphas"
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  restartHandler = () => {
    this.setState((prevState) => (
      {
        nWrong: 0,
        answer: randomWord(),
        guessed: new Set()
      }
    ))
  }
  /** render: render game */
  render() {


    let alt = `${this.state.nWrong} Wrong guesses!`

    let winningBody = '';
    if (this.win()) {
      winningBody = `Congrats You Won!!`;
    }

    let losingBody = '';
    if (this.state.nWrong > this.props.maxWrong) {
      losingBody =
        <div>
          <p>You lose!</p>
          <h4>Correct Word : {this.state.answer}</h4>
        </div>
    }
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img
          src={this.props.images[Math.min(this.state.nWrong, 6)]}
          alt={alt}
        />
        <p className="Hangman-wg">Wrong Guess('s) : {this.state.nWrong}</p>
        <div hidden={this.lose() ? 'hidden' : ''}>
          <p className='Hangman-word'>{this.guessedWord()}</p>
        </div>
        <div hidden={(this.lose() || (this.win())) ? 'hidden' : ''}>
          <p className={'Hangman-btns'}>
            {this.generateButtons()}
          </p>
        </div>
        {losingBody}
        {winningBody}
        <div>
          <button className="Hangman-restart" onClick={this.restartHandler}>RESTART</button>
        </div>
      </div>
    );
  }
}

export default Hangman;
