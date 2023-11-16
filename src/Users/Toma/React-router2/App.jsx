import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import ROUTES from './routes/routes'
import Users, { commentsLoader } from './pages/Users'
import Layouts from './components/Layouts/Layouts'
import Comment from './pages/Comment'


export default function App() {
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path={ROUTES.HOME} element ={<Layouts/>}>
        <Route path={ROUTES.USERS} element={<Users/>} loader={commentsLoader}/>
        <Route path={ROUTES.COMMENT} element={<Comment/>} />
    </Route>
      )
    )
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}