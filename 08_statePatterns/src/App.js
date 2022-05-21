import './App.css';
import React, { Component } from 'react'
import Demo from './UpdateExistingState';
import IconList from './MutatingState';
import Lottery from './Lottery';

class App extends Component {
  render() {
    return (
      <div className="App">
        HI
        <Demo/>
        <IconList/>
        <Lottery maxNum={90}/>
        <Lottery title="bhavyaLotteryWala" numBalls={9}/>
      </div>
    );
  }
}

export default App;
