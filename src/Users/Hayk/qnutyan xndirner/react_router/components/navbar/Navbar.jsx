import { NavLink } from "react-router-dom"
import "./Navbar.scss"
import ROUTES from "../../routes/routes"
export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to={ROUTES.HOME}>HOME</NavLink>
      <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
      <NavLink to={ROUTES.ABOUT}>ABOUT</NavLink>
    </div>
  )
}
