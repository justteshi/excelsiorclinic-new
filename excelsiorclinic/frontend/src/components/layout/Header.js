import React from 'react'
import { Link } from 'react-router-dom'

import companyLogo from '../../../static/images/excelsior_logo.png'


const Header = () => {
    return (
        <div className="nav-bar">
            <img src={companyLogo} />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/registration">Registration</Link></li>
            </ul>
        </div>
    )
}

export default Header