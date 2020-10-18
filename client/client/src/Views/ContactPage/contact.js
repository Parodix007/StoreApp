import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './contact.module.scss'

const ContactPage = () => {
    const [contact, setContact] = useState([])
    useEffect(() => {
        (async () => {
            const dane = await axios.get('http://127.0.0.1:8000/contact/')
            setContact([dane.data])
        })()
    }, [])
    return (
        <>
            <section className='box'>
                <article className={styles.formField}>
                    <section className="hero is-success">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    <strong>
                                        Contact form
                                    </strong>
                                </h1>
                            </div>
                        </div>
                    </section>
                    <form method='POST' action='/contactForm'>
                        <div>
                            <div className='field'>
                                <div className='control'>
                                    <label htmlFor='userName' className='label'>Name</label>
                                    <input type='text' placeholder='Enter your name...' className='input' required={true} name='userName' />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <label htmlFor='userEmail' className='label'>Email</label>
                                    <input type='email' placeholder='Enter your email...' className='input' required={true} name='userEmail' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='field'>
                                <div className='control'>
                                    <label htmlFor='userMessage' className='label'>Your message</label>
                                    <textarea className='textarea' placeholder='Enter your message...' maxLength='500' required={true} name='userMessage' />
                                </div>
                            </div>    
                        </div>
                        <div className='field'>
                            <div className='control'>
                                <input type='submit' className='button is-success' value='Send'/>
                            </div>
                        </div>
                    </form>
                </article>
                <hr />
                <article>
                    <section className="hero">
                        <div className="hero-body">
                            {contact.map( ( {phone_number, email, street} ) => (
                                <div className='container'>
                                    <div className='tile is-ancestor'>
                                        <div className='tile notification is-warning'>
                                            <div>
                                                <h1 className='title'>Contact us</h1>
                                                <h2 className='subtitle'>
                                                    <p><strong>Phone number:</strong> {phone_number}</p>
                                                    <p><strong>Email adress:</strong> {email}</p>
                                                    <p><strong>Street:</strong> {street}</p>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </section>
        </>
    )
}

export default ContactPage