import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary" style={{ boxShadow: "1px 2px 3px rgba(0, 0, 0, .1)" }}>
            <h1 style={{ color: "#ffffff" }}>
                <i className={icon}></i> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                </li>
                <li>
                    <Link to='/about' style={{ textDecoration: 'none' }}>About</Link>
                </li>
            </ul>
        </nav>
    )

}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fas fa-american-sign-language-interpreting"
}

Navbar.propType = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
