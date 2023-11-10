import axios from 'axios';
import { useState, useEffect } from 'react';


export default function useFetchData(options) {
  const [data, setData] = useState([])
  useEffect(() => {
    axios(options.fetchUrl, {
      params: {
        _limit: options.limit
      }
    })
      .then(res => setData(res.data))
  }, [options.fetchUrl, options.limit])



  return [data]
}
