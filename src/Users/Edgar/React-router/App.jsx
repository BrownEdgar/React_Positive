import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import ROUTES from './routes/routes'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  console.log(users)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About setUsers={setUsers} />} />
        <Route path={ROUTES.BLOG} element={<Blog users={users} />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

    </div>
  )
}
