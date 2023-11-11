import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(options) {
  const [data, setData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
=======
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
>>>>>>> refs/remotes/origin/main
    axios(options.baseURL + options.url, {
      params: {
        _limit: options.limit,
        _start: options.start
      }
    })
      .then(res => setData(res.data))
  }, [options.baseURL, options.limit, options.start, options.url])
<<<<<<< HEAD
=======
>>>>>>> e6fe679fbb36b3f23fdc87c963f9c09cd93eb85f
>>>>>>> refs/remotes/origin/main

  return [data];
}
