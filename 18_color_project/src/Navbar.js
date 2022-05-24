import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import SelectColorType from './Select';
import SimpleSnackbar from './SnackBar';

function Navbar(props) {
    let { level, setLevel, colorType, setColorType } = props;
    const [open, setOpen] = useState(false);
    return (
        <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>ReactColorProject</Link>
            </div>
            {props.isSliderVisible &&
                (
                    <div className='slider-container'>
                        <span>Level: {level}</span>
                        <input type='range' className='form-range slider' min='100' value={level} max='900' step='100' onChange={(e) => { setLevel(e.target.value) }} />
                    </div>
                )
            }
            <div className="select-container">
                <SelectColorType colorType={colorType} setColorType={setColorType} setOpen={setOpen} />
            </div>
            <div>
                <SimpleSnackbar colorType={colorType} open={open} setOpen={setOpen} />
            </div>
        </header>
    )
}
Navbar.defaultProps={
    isSliderVisible:true,
}
export default Navbar;
