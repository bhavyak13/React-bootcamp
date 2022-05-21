import React, { Component } from 'react'
import './App.css';
import Button from './button';
import Button2 from './Button2';
import Hello from './Hello';
import Rando from './Rando';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Hello kuch="bhi" /> */}
        {/* <Rando largest={45}/> */}
        {/* <Button/> */}
        <Button2/>
      </div>
    )
  }
}
export default App;
