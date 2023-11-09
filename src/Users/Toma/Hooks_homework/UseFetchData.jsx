import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(options.baseURL + options.url, {
      params: {
        _limit: options.limit,
        _start: options.start
      }
    })
      .then(res => setData(res.data))
  }, [options.baseURL, options.limit, options.start, options.url])

  return [data];
}
