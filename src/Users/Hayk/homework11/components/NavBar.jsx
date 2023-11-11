import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { COMMENTS, POSTS, TODOS, USERS } from "../routes/routes";

export default function NavBar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to={COMMENTS}>Comments</NavLink>
        </li>
        <li>
          <NavLink to={POSTS}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={TODOS}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={USERS}>Users</NavLink>
        </li>
      </ul>
    </div>
  );
}
