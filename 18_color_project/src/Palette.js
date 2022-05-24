import React, { useState } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'
import PaletteFooter from './PaletteFooter';

function Palette(props) {
    const [level, setLevel] = useState(500);
    const [colorType, setColorType] = useState('hex')
    return (
        <div className='Palette'>
            <Navbar level={level} setLevel={setLevel} colorType={colorType} setColorType={setColorType} />
            <div className='Palette-colors'>
                {props.colors[level].map(color => (
                    <ColorBox
                        background={color[colorType]}
                        name={color.name}
                        key={color.hex}
                        paletteId={props.id}
                        colorId={color.id}
                    />
                ))}
            </div>
            <PaletteFooter name={props.paletteName} emoji={props.emoji} />
        </div>
    )
}
export default Palette;