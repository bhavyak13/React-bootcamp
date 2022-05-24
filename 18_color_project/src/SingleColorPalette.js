import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const useStyles = makeStyles({
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    colors: {
        height: '90%',
    },
    goBackColorBox: {
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-5.5px',
        height: '50%',
        backgroundColor: 'black'
    },
    goBackButton: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginTop: '-15px',
        marginLeft: '-50px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: 'white',
        textTransform: 'uppercase',
        border: 'none',
    }
})

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