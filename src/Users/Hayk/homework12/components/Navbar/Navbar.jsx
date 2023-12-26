import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import ROUTES from "../../routes/routes";

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to={ROUTES.COMMENTS}>Comments</NavLink>
      <NavLink to={ROUTES.USERS}>Users</NavLink>
    </div>
  );
}
