import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
        <h1>404 | page not found</h1>
        <Link to={ROUTES.HOME}>Go home</Link>
    </div>
  )
}
