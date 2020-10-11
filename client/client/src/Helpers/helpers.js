import React from 'react'
import axios from 'axios'

// export const fetchCategory = props => {
//     const [category, setCategory] = React.useState([])
//     React.useEffect( () => {
//         (async () => {
//             const dane = await axios.get('http://127.0.0.1:8000/')
//             setCategory(dane.data)
//         })()
//     }, [])

//     return (
//         props.render(category)
//     )
// }

export const FetchCategory = props => props.render('costam')