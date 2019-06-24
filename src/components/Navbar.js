import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'

class Navbar extends Component {
    render () {
        return (
            <nav className="nav-wraper red darken-3">
             <div className="container">
               <a className="brand-logo"> HRK</a>
               <ul className="right">
                   <li><NavLink to="/"> Home</NavLink></li>
                   <li><NavLink to="/contact"> Contact</NavLink></li>
                   <li><NavLink to="/aboutus"> About</NavLink></li>
               </ul>
             </div>
            </nav>
        )
    }
}

export default Navbar