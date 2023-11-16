import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import ROUTES from "../../routes/routes";

export default function NavBar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to={ROUTES.COMMENTS}>Comments</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.POSTS}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.TODOS}>Todos</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.USERS}>Users</NavLink>
        </li>
      </ul>
    </div>
  );
}
