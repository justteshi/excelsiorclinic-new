import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import companyLogo from '../../../static/images/excelsior_logo.png'


const Navbar = () => {
    const navStylesActive = {
        background: '#00a6ce',
        color: 'white',
        borderRadius: '5px'
    }
    return (
        <div className="nav-bar container">
            <img src={companyLogo} />
            <ul>
                <li><NavLink exact to="" activeStyle={navStylesActive}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={navStylesActive}>About us</NavLink></li>
                <li><NavLink to="/services" activeStyle={navStylesActive}>Services</NavLink></li>
                <li><NavLink to="/gallery" activeStyle={navStylesActive}>Gallery</NavLink></li>
                <li><NavLink to="/news" activeStyle={navStylesActive}>News</NavLink></li>
                <li><NavLink to="/contacts" activeStyle={navStylesActive}>Contacts</NavLink></li>
                <li><NavLink to="/registration" activeStyle={navStylesActive}>Registration</NavLink></li>
            </ul>
            {/* <nav>
                <NavLink to="/">Home</NavLink>
            </nav> */}
        </div>
    )
}

export default Navbar