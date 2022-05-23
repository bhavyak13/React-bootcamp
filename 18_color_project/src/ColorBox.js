import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';


function ColorBox(props) {
    let { background, name } = props;
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied) {
            setTimeout(() => { setCopied(false) }, 1500);
        }
    }, [copied])
    return (
        <CopyToClipboard text={background} onCopy={() => { setCopied(true) }}>
            <div className='ColorBox' style={{ background }}>
                <div className={`copy-overlay ${copied && 'show'}`} style={{ background }} />
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{name}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>MORE</span>
            </div>
        </CopyToClipboard >
    )
}
export default ColorBox;
