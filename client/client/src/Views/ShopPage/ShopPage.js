import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from './shoppage.module.scss'

const ShopPage = () => {
    const [items, setItems] = useState([])
    useEffect(() =>{
        ( async () => {
            try{
                const dane = await axios.post(`http://127.0.0.1:8000/shop/${window.location.search}`)
                setItems(dane.data)
            }catch(error){
                setItems('Nettwor error')
            }
        })()
    },[])
    return (
        <>
                <section className='tile is-ancestor'>
                    <div className='tile is-parent is-vertical'>
                        {
                            items.length ? items.map(({id, item_name, item_short_desc, item_img_url, is_item}) =>(
                                <section className='title is-child' data-id={id}>
                                    <div className='box'>
                                        <div className={styles.item}>
                                            <div>
                                                <figure class="image is-128x128">
                                                    <img src={item_img_url} alt='item_image' />
                                                </figure>
                                            </div>
                                            <div>
                                                <Link to={`item?id=${id}`}>{item_name}</Link>
                                                <hr />
                                                <p><span>About product:</span> {item_short_desc}</p>
                                                <hr />
                                                <footer>
                                                    {is_item ? <p className={styles.stock}>is in stock</p> : 
                                                    <p className={styles.notStock}>not in stock</p>}
                                                </footer>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )): 
                            <section className='tile is-child'>
                                <div className='box is-warning'>
                                    {items}
                                    <button className="button is-danger is-loading">Loading</button>
                                </div>
                            </section>
                        }
                    </div>
                </section>
        </>
    )
}

export default ShopPage