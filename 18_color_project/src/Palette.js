import React, { useState } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import useStyles from './Styles/PaletteStyles';

function Palette(props) {
    let classes = useStyles();
    const [level, setLevel] = useState(500);
    const [colorType, setColorType] = useState('hex')
    return (
        <div className={classes.Palette}>
            <Navbar level={level} setLevel={setLevel} colorType={colorType} setColorType={setColorType} />
            <div className={classes.PaletteColors}>
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