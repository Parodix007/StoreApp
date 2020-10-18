import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const FetchCategory = props => {
    const [category, setCategory] = useState([])
    useEffect( () => {
        (
            async () => {
                try{
                    const dane = await axios.get('http://127.0.0.1:8000/')
                    setCategory(dane.data)
                }catch(er){
                    console.log(er)
                }
            }
        )()
    }, [])
    
    return props.render(category)
}

export const Error = () => (
    <>
        <div>
            <p>Loading...</p>
        </div>
        <div>
            <button className="button is-danger is-loading">Loading</button>
        </div>
    </>
)