import React, { Component } from 'react'
import './App.css';
import DadJokesList from './DadJokesList';
import DeckOfCards from './DeckOfCards';
class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    return (
      <div className='App'>
        {/* <DeckOfCards/> */}
        <DadJokesList/>
      </div>
    )
  }
}
export default App