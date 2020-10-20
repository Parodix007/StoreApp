import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Error } from "../../Helpers/helpers";
import styles from "./ItemPage.module.scss";

const ItemPage = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const dane = await axios.post(`http://127.0.0.1:8000/item/${window.location.search}`)
                setItem([dane.data])
            }catch(error){
                console.log(error)
            }
        })()
    }, [])

    return (
        <>
            <section className='box'>
                {
                    item.length ? item.map( ({item_name, item_price, item_desc, is_item, item_img_url}) => (
                        <>
                            <div className={styles.itemInfo}>
                                <div>
                                    <img src={item_img_url} alt='item_img' />
                                </div>
                                <div className='content'>
                                    <p><strong>Product:</strong> {item_name}</p>
                                    <p><strong>Product price:</strong> {item_price}$</p>
                                    <div>
                                    {
                                        is_item ? 
                                            <div>
                                                <p><strong>Availibity: </strong><span className={styles.isItem}>Available to order</span></p>
                                                <button className='button is-success is-rounded'>Order</button>
                                            </div> 
                                        : 
                                            <div>
                                                <p><strong>Availibity: </strong><span className={styles.notItem}>Not available to order</span></p>
                                                <button className='button is-danger is-rounded'>Notife about availibity</button>
                                            </div>
                                    }
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <section className="hero">
                                    <div className="hero-body">
                                        <div className="container">
                                        <h1 className="title">
                                            About product
                                        </h1>
                                        </div>
                                    </div>
                                </section>
                                <div>
                                    <p>{item_desc}</p>
                                </div>
                            </div>
                        </>
                    )) :
                        <div className={styles.error}>
                            <Error />
                        </div>
                }
            </section>
        </>
    )
}

export default ItemPage