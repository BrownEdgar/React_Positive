import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import "./Users.scss";

export default function Todos() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
    }).then((res) => setTodo(res.data));
  }, []);

  return (
    <div className="Users">
      <pre>{JSON.stringify(todo, null, 1)}</pre>
    </div>
  );
}
