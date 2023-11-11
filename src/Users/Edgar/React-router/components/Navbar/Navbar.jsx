import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes/routes'

import './Navbar.scss'

const setClass = ({ isActive }) => isActive ? 'active-link' : ''

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to={ROUTES.HOME} className={setClass}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT} className={setClass}>About</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.BLOG} className={setClass}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CONTACT} className={setClass}>CONTACT</NavLink>
        </li>
      </ul>
    </header>
  )
}
