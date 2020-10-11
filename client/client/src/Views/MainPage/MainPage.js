import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './mainpage.module.scss'
import { Link } from 'react-router-dom'
import { FetchCategory } from '../../Helpers/helpers'

const MainPage= () => {
    const [category, setCategory] = useState([])
    useEffect( () => {
        (async () => {
            const dane = await axios.get('http://127.0.0.1:8000/')
            setCategory(dane.data)
        })()
    }, [])
    return ( 
        <section className={`${styles.container} box`}>
            <ul>
                {/* <fetchCategory render={value => (
                    <li className={styles.element}>
                        <section className={`${styles.hero} hero is-link`}>
                            <section className='hero-body'>
                                <div className='container'>
                                    <h1 className='title'>
                                        {value}
                                        <Link 
                                            to={`shop/?category=${item['id']}`} 
                                            className={styles.link}
                                        >
                                            {item['category_name']}
                                        </Link>
                                    </h1>
                                    <hr />
                                    <p className='subtitle'>
                                        {item['category_desc']}
                                    </p>
                                </div>
                            </section>
                        </section>
                    </li>
                ) } /> */}
                <FetchCategory render={(value) => value} />
            </ul>
        </section>
    )
}

export default MainPage
