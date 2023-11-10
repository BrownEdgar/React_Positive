import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
      axios(options.baseURL + options.url, {
          params: {
            _limit: options.limit,
            _start: options.start
          }
        })
        .then(res => setData(res.data))
}, [options.baseURL, options.limit, options.start, options.url])
=======
    axios(options.baseURL + options.url, {
      params: {
        _limit: options.limit,
        _start: options.start
      }
    })
      .then(res => setData(res.data))
  }, [options.baseURL, options.limit, options.start, options.url])
>>>>>>> e6fe679fbb36b3f23fdc87c963f9c09cd93eb85f

  return [data];
}
