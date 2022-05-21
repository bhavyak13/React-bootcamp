import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css'

class VendingMachine extends Component {
    static defaultProps = {
        // snacks: ['soda', 'lays', 'chocolate']
    }
    render() {
        return (
            <div className='VendingMachine'>
                <h1 style={{ color: 'white' }}
                    className='VendingMachine-message'
                >
                    Welcome to Vending Machine
                </h1>
                <div className='VendingMachine-message' style={{ color: 'white' }}>
                    <Link to='/lays' >Lays</Link>
                    <br/>
                    <Link to='/chocolate'>Chocolate</Link>
                    <br/>
                    <Link to='/soda'>Soda</Link>
                </div>
            </div>
        )
    }
}
export default VendingMachine;