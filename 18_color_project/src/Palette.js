import React, { useState } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'

function Palette(props) {
    const [level, setLevel] = useState(500);
    return (
        <div className='Palette'>
            <Navbar level={level} setLevel={setLevel} />
            <div className='Palette-colors'>
                {props.colors[level].map(color => (
                    <ColorBox background={color.hex} name={color.name} key={color.hex} />
                ))}
            </div>
        </div>
    )
}
export default Palette;