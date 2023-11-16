import './Navbar.scss'
import {  NavLink } from 'react-router-dom'
import ROUTES from '../../routes/routes'

export default function Navbar() {
  return (
    <header>
    <ul>
      <li>
            <NavLink to={ROUTES.USERS}>Users</NavLink>
      </li>
    </ul>
    </header>
  )
}