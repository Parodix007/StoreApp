import React from 'react'
import styles from './mainpage.module.scss'
import { Link } from 'react-router-dom'
import { FetchCategory } from '../../Helpers/helpers'

const MainPage= () => ( 
        <section className={`${styles.container} box`}>
            <ul>
                <FetchCategory render={categorys => (
                    <ul>
                        {categorys.length ? categorys.map( ( { id, category_name, category_desc } ) => (
                            <li className={styles.element} key={id}>
                                <section className={`${styles.hero} hero is-link`}>
                                    <section className='hero-body'>
                                        <div className='container'>
                                            <h1 className='title'>
                                                <Link 
                                                    to={`shop?category=${id}`} 
                                                    className={styles.link}
                                                >
                                                    {category_name}
                                                </Link>
                                            </h1>
                                            <hr />
                                            <p className='subtitle'>
                                                {category_desc}
                                            </p>
                                        </div>
                                    </section>
                                </section>
                            </li>
                        )) : 
                        <li className={styles.error}>
                            <div>
                                <p>Loading...</p>
                            </div>
                            <div>
                                <button class="button is-danger is-loading">Loading</button>
                            </div>
                        </li>}
                    </ul>
                )} />
            </ul>
        </section>
)

export default MainPage
