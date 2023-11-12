import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import ROUTES from "../../../routes/routes";

export default function NavBar() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <NavLink to={ROUTES.HOME}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.FLOAT}>FLOAT</NavLink>
        </li>
      </ul>
    </div>
  );
}
