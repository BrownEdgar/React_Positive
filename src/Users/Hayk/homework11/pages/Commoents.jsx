import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import "./Users.scss";

export default function Commoents() {
  const [commoents, setCommoents] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
    }).then((res) => setCommoents(res.data));
  }, []);

  return (
    <div className="Commoents">
      <pre>{JSON.stringify(commoents, null, 1)}</pre>
    </div>
  );
}
