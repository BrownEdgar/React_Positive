import React from 'react'
import './Navbar.scss'
import { Link, NavLink, Routes } from 'react-router-dom'
import ROUTES from '../../routes/routes'

export default function Navbar() {
  return (
    <header>
    <ul>
        <li>
            <NavLink to={ROUTES.TODOS}>Todos</NavLink>
        </li>
        <li>
            <NavLink to={ROUTES.COMMENTS}>Comments</NavLink>
        </li>
        <li>
            <NavLink to={ROUTES. USERS}>Users</NavLink>
        </li>
        <li>
            <NavLink to={ROUTES. POSTS}>Posts</NavLink>
        </li>
    </ul>
    </header>
  )
}
