import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectColorType from './Select';
import SimpleSnackbar from './SnackBar';
import useStyles from './Styles/NavbarStyles';

function Navbar(props) {
    let classes = useStyles();
    let { level, setLevel, colorType, setColorType } = props;
    const [open, setOpen] = useState(false);
    return (
        <header className={classes.Navbar}>
            <div className={classes.logo}>
                <Link to='/'>ReactColorProject</Link>
            </div>
            {props.isSliderVisible &&
                (
                    <div className={classes.sliderContainer}>
                        <span>Level: {level}</span>
                        <input
                            type='range'
                            className={`form-range ${classes.slider}`}
                            min='100'
                            value={level}
                            max='900'
                            step='100'
                            onChange={(e) => { setLevel(e.target.value) }} />
                    </div>
                )
            }
            <div className={classes.selectContainer}>
                <SelectColorType colorType={colorType} setColorType={setColorType} setOpen={setOpen} />
            </div>
            <div>
                <SimpleSnackbar colorType={colorType} open={open} setOpen={setOpen} />
            </div>
        </header>
    )
}
Navbar.defaultProps = {
    isSliderVisible: true,
}
export default Navbar;
