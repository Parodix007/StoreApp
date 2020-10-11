import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import styles from './nav.module.scss'

const Nav = () => { 

    //const [category, setCategory] = useState([])

    return (
    <nav className="navbar is-dark is-bold is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <NavLink to='/' className='navbar-item' activeClassName={styles.active}>Store App</NavLink>
        </div>
        <div className='navbar-menu'>
            <div className='navbar-start'>
                <NavLink to='/about' className='navbar-item' activeClassName={styles.active}>About Us</NavLink>
                <NavLink to='/contact' className='navbar-item' activeClassName={styles.active}>Contact</NavLink>
                <div className='navbar-item has-dropdown is-hoverable'>
                    <a className='navbar-link'>Shop</a>
                    <div className='navbar-dropdown'>
                        <NavLink to='shop/?category=1' className='navbar-item'>T-shirts</NavLink>
                        <div className='navbar-divider'></div>
                        <NavLink to='shop/?category=2' className='navbar-item'>Hoodie</NavLink>
                        <div className='navbar-divider'></div>
                        <NavLink to='shop/?category=3' className='navbar-item'>Pants</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)}

export default Nav