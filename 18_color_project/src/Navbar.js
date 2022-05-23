import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar(props) {
    let { level, setLevel } = props;
    return (
        <header className='Navbar'>
            <div className='logo'>
                <Link to='dogs'>ReactColorProject</Link>
            </div>
            <div className='slider-container'>
                <span>Level: {level}</span>
                <input type='range' className='form-range slider' min='100' value={level} max='900' step='100' onChange={(e) => { setLevel(e.target.value) }} />
            </div>
        </header>
    )
}
export default Navbar;