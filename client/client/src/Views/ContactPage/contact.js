import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './contact.module.scss'

const ContactPage = () => {
    const [contact, setContact] = useState([])
    useEffect(() => {
        (async () => {
            const dane = await axios.get('http://127.0.0.1:8000/contact/')
            setContact(dane.data)
        })()
    }, [])
    return (
        <>
            <section className='box'>
                <article className={styles.form}>
                    <form method='POST' action='/sendForm'>
                        <div className='field'>
                            <div className='control'>
                                <input type='text' placeholder='Enter your name...' className='input' required={true} />
                            </div>
                        </div>
                        <div className='field'>
                            <div className='control'>
                                <input type='email' placeholder='Enter your email...' className='input' required={true} />
                            </div>
                        </div>
                    </form>
                </article>
                <hr />
                <article>
                    
                </article>
            </section>
        </>
    )
}

export default ContactPage