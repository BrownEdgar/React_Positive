import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Navigate, Route, Routes } from 'react-router-dom';
import ROUTES from './routes/routes';
import ErrorPage from './pages/ErrorPage';

export default function App(props) {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={ROUTES.ABOUT} element={<About />}/>
          <Route path={ROUTES.BLOG} element={<Blog />}/>
          <Route path={ROUTES.CONTACT} element={<Contact />}/>
          <Route path='*' element={<ErrorPage />}/>

        </Routes>
        
        
       
    </div>
  )
}
