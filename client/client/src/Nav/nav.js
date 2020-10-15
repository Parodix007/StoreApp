import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './nav.module.scss'
import { FetchCategory } from "../Helpers/helpers";

const Nav = () => (
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
                    <FetchCategory render={categorys =>(
                            <div className='navbar-dropdown'>
                                {
                                    categorys.map( ( {id, category_name} ) => (
                                        <>
                                            <NavLink to={`shop?category=${id}`} className='navbar-item'>{category_name}</NavLink>
                                            <div className='navbar-divider'></div>
                                        </>
                                    ))
                                }
                            </div>
                    )} />

                </div>
            </div>
        </div>
    </nav>
)

export default Nav