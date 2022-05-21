import React, { Component } from 'react'
import './App.css'
import CoinFlipper from './CoinFlipper';
import CoinFlipper2 from './CoinFlipperColt';
import Color from './ColorExercise';
class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <CoinFlipper  /> */}
        {/* <CoinFlipper2  /> */}
        <Color/>
      </div>
    )
  }
}
export default App;