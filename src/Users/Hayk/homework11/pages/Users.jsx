import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Users.scss";

export default function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
    }).then((res) => setUser(res.data));
  }, []);

  return (
    <div className="Users">
      <pre>{JSON.stringify(user, null, 1)}</pre>
    </div>
  );
}
