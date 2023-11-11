import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Users.scss";

export default function Commoents() {
  const [com, setCom] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
    }).then((res) => setCom(res.data));
  }, []);

  return (
    <div className="Users">
      <pre>{JSON.stringify(com, null, 1)}</pre>
    </div>
  );
}
