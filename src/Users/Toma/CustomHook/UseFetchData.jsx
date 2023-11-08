import {useEffect,useState} from 'react';
import axios from 'axios';

export default function useFetchData(options) {
 const [data, setData] = useState([])
 useEffect(() => {
  axios(options.fetchUrl,{
    params:{
        _limit:options.limit
    }
  })
  .then(res => setData(res.data))
   
 }, [options.fetchUrl, options.limit])
 
 
    return [data]
   

}
