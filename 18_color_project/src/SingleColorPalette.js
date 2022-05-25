import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import useStyles from './Styles/SingleColorPaletteStyles';

function SingleColorPalette(props) {
    let isSliderVisible = false;
    const [colorType, setColorType] = useState('hex');
    const { colorId, colors, paletteName, emoji } = props;
    let classes = useStyles();
    let height = '50%'

    let shades = [];
    for (let level in colors) {
        shades.push(colors[level].find(e => (e.id === colorId)))
    }
    shades = shades.slice(2);
    let navigate = useNavigate();
    const clickHandler = () => {
        navigate(-1);
    }
    return (
        <div className={classes.Palette}>
            <Navbar isSliderVisible={isSliderVisible} colorType={colorType} setColorType={setColorType} />
            <div className={classes.colors}>
                {shades.map(color => (
                    <ColorBox moreVisibility={false}
                        background={color[colorType]}
                        name={color.name}
                        key={color.name}
                        height={height} />
                ))}
                <div className={classes.goBackColorBox} onClick={clickHandler}>
                    <button className={classes.goBackButton}>
                        Go back!
                    </button>
                </div>
            </div>
            <PaletteFooter emoji={emoji} name={paletteName} />
        </div>
    )
}

export default SingleColorPalette;