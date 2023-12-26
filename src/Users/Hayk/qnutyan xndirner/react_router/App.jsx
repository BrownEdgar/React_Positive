import "./App.scss"
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from "./pages/home/Home"
import ROUTES from "./routes/routes"
import Blog from "./pages/blog/Blog"
import Layouts from "./components/layouts/Layouts"
import About from "./pages/About/About"

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path={ROUTES.HOME} element={<Layouts/>}>
                 <Route index element={<Home/>}/>
                 <Route path={ROUTES.BLOG} element={<Blog/>}/>
                 <Route path={ROUTES.ABOUT} element={<About/>}/>
                </Route>

        )
    )
  return (
    < > 
    <div className="App">
    </div>
       <div >
        <RouterProvider router={router}/>
       </div>
    </>
  )
}
