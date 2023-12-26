import { useState, useEffect } from 'first'
import axios from 'axios';


export default function useFetchData(options) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios(options.fetchUrl, {
            params: {
                _limit: options.limit,
                _start: options.start
            }
        })
        .then(res => setData(res.data))
     
    }, [options.fetchUrl, options.limit,  options.start])
    
    return [data]
}
