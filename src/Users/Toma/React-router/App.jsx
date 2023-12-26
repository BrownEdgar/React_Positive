import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes/routes'
import ErrorPage from './pages/ErrorPage'
import Todos from './pages/Todos'
import Comments from './pages/Comments'
import Users from './pages/Users'
import Posts from './pages/Posts'

export default function App() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path={ROUTES.TODOS} element={<Todos/>}/>
            <Route path={ROUTES.COMMENTS} element={<Comments />}/>
            <Route path={ROUTES.USERS} element={<Users />}/>
            <Route path={ROUTES.POSTS} element={<Posts/>}/>
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
    </div>
  )
}
