import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = (props) => (
    <div className="menu">
        <div className="menuLogo">
            <a href="/">Logo</a>
        </div>
        <nav className="menuNav">
            <ul>
                <NavLink to="/" activeStyle={{color: '#ff0080'}} className="menuNavLink">
                    <li>Favorite Repositorie</li>
                </NavLink>
                <NavLink to="/location" activeStyle={{color: '#ff0080'}} className="menuNavLink">
                    <li>Event Listener Location</li>
                </NavLink>
            </ul>
        </nav>
    </div>
)

export default Header;
