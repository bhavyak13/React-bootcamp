import React, { Component } from 'react'
import './App.css';
import Demo from './BindingWithArguments';
import Event from './Events';
import NumberList from './PassingMethodsToChildComponents';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Demo/> */}
				{/* <Event/> */}
				<NumberList/>
			</div>
		)
	}
}

export default App;
