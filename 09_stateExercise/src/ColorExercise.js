import React, { Component } from 'react'
import Box from './Box';
import { randomColor } from './Helpers'
import './ColorExercise.css'
class Color extends Component {
    render() {
        return (
            <div>
                <h1>Random Color</h1>
                <section className='Container'>
                    {Array.from({ length: 16 }).map(e => {
                        return <Box color={randomColor()} />
                    })}
                </section>
                <p>PS: click any square to change its color {1 ? ':-)' : ''}</p>
            </div>
        )
    }
}
export default Color