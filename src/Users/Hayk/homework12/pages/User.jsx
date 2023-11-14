import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 1)}</pre>
    </div>
  );
}
