import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import "./User.scss";

export default function Users() {
  const users = useLoaderData();
  return (
    <div className="Users">
      {users.map((elem) => {
        return (
          <Link key={elem.id} className="Users_users" to={`${elem.id}`}>
            <div>
              <h2>{elem.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const usersLoader = () => {
  return axios("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.data
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export { usersLoader };
