import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js'
// ⚠️ @mui/styles is not compatible with React.StrictMode or React 18.

const useStyles = makeStyles({
    ColorBox: {
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        cursor: 'pointer',
        position: 'relative',
        marginBottom: '-5.5px',
        height: (props) => props.height,
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? 'white' : 'black'
    },
    seeMore: {
        position: 'absolute',
        /* 'padding: 10px; */
        right: '0px',
        bottom: '0px',
        background: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
    },
    copyButton: {
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
        opacity: '0',
        color: props => chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
    }


})

function ColorBox(props) {
    const { background, name, paletteId, colorId } = props;
    const [copied, setCopied] = useState(false);
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
    let navigate = useNavigate();
    useEffect(() => {
        if (copied) {
            setTimeout(() => { setCopied(false) }, 1500);
        }
    }, [copied])
    const clickHandler = () => {
        navigate(`/palette/${paletteId}/${colorId}`);
    }
    const classes = useStyles(props);
    return (
        <CopyToClipboard text={background} onCopy={() => { setCopied(true) }}>
            <div className={classes.ColorBox} style={{ backgroundColor: background }}>
                <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {props.moreVisibility &&
                    <span className={classes.seeMore} onClick={clickHandler}>MORE</span>
                }
            </div>
        </CopyToClipboard >
    )
}

ColorBox.defaultProps = {
    moreVisibility: true,
    height: '25%',
}

export default ColorBox;
