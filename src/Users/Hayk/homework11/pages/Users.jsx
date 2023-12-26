import axios from "axios";
import "./Users.scss";
import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  return (
    <div className="Users">
      {users.map((elem) => {
        return (
          <Link key={elem.id} className="comments" to={`${elem.id}`}>
            <h2>{elem.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

const usersLoader = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users?_limit=10")
    .then((res) => res.data);
};

// eslint-disable-next-line react-refresh/only-export-components
export { usersLoader };
