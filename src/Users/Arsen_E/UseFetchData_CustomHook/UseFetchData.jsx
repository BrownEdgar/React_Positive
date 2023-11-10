import axios from 'axios'
import { useState, useEffect } from "react";

export default function UseFetchData(options) {
  const [data, setData] = useState([])

  useEffect(() => {

    axios(options.fetchUrl, {
      params: {
        _limit: options.limit,
        _start: options.start,
      }
    })
      .then(res => setData(res.data))

  }, [options.fetchUrl, options.limit, options.start])


  return [data]
}
