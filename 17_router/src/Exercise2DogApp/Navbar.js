import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
function Navbar(props) {
    let activeClassName = 'nav-link Nav-active'
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <NavLink
                                className={({ isActive }) => (isActive ? activeClassName : 'nav-link')}
                                to='/dogs'
                                end
                                >
                                Home
                            </NavLink>
                        </li>
                        {props.dogs.map(dog => (
                            <li className="nav-item" key={dog.name}>
                                <NavLink
                                    to={`/dogs/${dog.name}`}
                                    className={({ isActive }) => (isActive ? activeClassName : 'nav-link')}>
                                    {dog.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;