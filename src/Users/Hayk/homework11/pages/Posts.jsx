import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import "./Users.scss";

export default function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "comments",
    }).then((res) => setPost(res.data));
  }, []);

  return (
    <div className="Users">
      <pre>{JSON.stringify(post, null, 1)}</pre>
    </div>
  );
}
