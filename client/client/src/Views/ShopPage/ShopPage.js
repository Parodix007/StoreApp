import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
            <h1>cos tam</h1>
            {items.map(e => console.log(e))}
        </>
    )
}

export default ShopPage