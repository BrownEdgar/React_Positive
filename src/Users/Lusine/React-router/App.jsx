import { useState } from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import About from './pages/About'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'//?
import Blog from './pages/Blog'
import  Contact from './pages/Contact'

import ROUTES from './routes/routes'
import Layouts from './components/Navbar/Layouts/Layouts' //-

export default function App() {
  const [users, setUsers] = useState([]) //+
  const router = createBrowserRouter( //+
    createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<Layouts />}> 
      <Route index element={<Home />}/>
      <Route path={ROUTES.ABOUT} element={<About setUsers={setUsers} />}/>
      <Route path={ROUTES.BLOG} element={<Blog users={users} />}/>
      <Route path={ROUTES.CONTACT} element={<Contact />} loader={commentsLoader}/>
      <Route path={ROUTES.COMMENT} element={<Comment />} />
      <Route path='*' element={<ErrorPage />}/>
    </Route>
    )
  )

  return (
    <div>
        <RouterProvider router={router} /> 
    </div>
  )
}
