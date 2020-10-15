import {useState, useEffect} from 'react'
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