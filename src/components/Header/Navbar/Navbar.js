import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom'
import Logo from '../../../Material/gfx/gfx/runinc_logo.jpg';

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper white">
            <div className="container">
                <a className="brand-logo"><img src={Logo}></img></a>
                <ul className="center">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <label for="search"></label>
                    <input type="search" id="search" name="search"></input>
                    <button>Search</button>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter (Navbar);