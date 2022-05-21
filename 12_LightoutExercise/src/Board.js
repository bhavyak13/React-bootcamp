import React, { Component } from 'react'
import Cell from './Cell';
import './Board.css'

class Board extends Component {
	static defaultProps = {
		nRow: 5,
		nCol: 5,
		chance: 0,
	}
	constructor(props) {
		super(props);
		this.state = {
			board: this.createBoard(),
			gameOver: false,
		}
	}
	createBoard() {
		let board = [];
		for (let x = 0; x < this.props.nRow; x++) {
			let row = [];
			for (let y = 0; y < this.props.nCol; y++) {
				let val = Math.random();
				val = (val > this.props.chance ? 0 : 1)
				row.push(val);
			}
			board.push(row);
		}
		return board;
	}
	toggle = (indexi, indexj) => {
		let sum = 0;
		const newBoard = this.state.board.map(
			(arr, i) => (
				arr.map((e, j) => {
					sum += e;
					if ((i === indexi && j === indexj) ||
						(i === indexi - 1 && j === indexj) ||
						(i === indexi + 1 && j === indexj) ||
						(i === indexi && j === indexj - 1) ||
						(i === indexi && j === indexj + 1)) {
						sum -= e;
						sum += Math.abs(1 - e);
						return (Math.abs(1 - e));
					}
					else return e;
				})
			)
		)
		this.setState({
			board: newBoard
		})
		if (!sum) {
			this.setState({
				gameOver: true,
			})
		}
	}
	clicked = (value) => {
		this.toggle(parseInt(value[0]), parseInt(value[1]));
	}
	render() {
		return (
			<div className='mains'>
				<div className='Board-title'>
					<div className='neon-orange'>Lights</div>
					<div className='neon-blue'>Out</div>
				</div>
				<section className='Board'
					hidden={!this.state.gameOver ? '' : 'hidden'}
				>
					{this.state.board.map((arr, i) => {
						return (arr.map((e, j) => (<Cell value={e} key={`${i}${j}`} index={`${i}${j}`} clicked={this.clicked} />)))
					})}
				</section>
				<div hidden={this.state.gameOver ? '' : 'hidden'}>
					<div className='winner'>
						<span className='neon-orange'>YOU</span>
						<span className='neon-blue'>WIN!</span>
					</div>
				</div>


			</div>
		)
	}
}
export default Board;



/*
[
				[0, 0, 0, 1, 1],
				[0, 1, 0, 0, 1],
				[1, 1, 1, 0, 0],
				[0, 1, 0, 0, 0],
				[0, 0, 0, 0, 0],
			],
 */
	//async neeeded to run this :(
	// checkWin = () => {
	// 	let sum = 0;
	// 	this.state.board.forEach(arr => { sum += arr.reduce((p, c) => p + c) })
	// 	console.log(sum);
	// 	if (!sum) {
	// 		this.setState({
	// 			gameOver: true,
	// 		})
	// 	}
	// 	return this.state.gameOver;
	// }
