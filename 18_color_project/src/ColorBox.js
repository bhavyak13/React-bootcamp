import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import useStyles from './Styles/ColorBoxStyles';
// ⚠️ @mui/styles is not compatible with React.StrictMode or React 18.



function ColorBox(props) {
    const { background, name, paletteId, colorId } = props;
    const [copied, setCopied] = useState(false);
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
                <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }} />
                <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
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
