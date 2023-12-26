import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxiosData(options) {
  const [data, setDsers] = useState([]);
  useEffect(() => {
    axios({
      baseURL: options.basURL,
      url: options.url,
      params: {
        _limit: options.limit,
        _start: options.start,
      },
    }).then((res) => setDsers(res.data));
  }, [options.basURL, options.url, options.limit, options.start]);

  return [data];
}
