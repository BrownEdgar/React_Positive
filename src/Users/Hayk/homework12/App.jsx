import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider,
} from "react-router-dom";
import ROUTES from "./routes/routes";
import Layouts from "./components/Layouts/Layouts";
import Users, { usersLoader } from "./pages/Users";
import Comments, { commentsLoader } from "./pages/Comments";
import User from "./pages/User";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path={ROUTES.COMMENTS} element={<Layouts/>}>
     <Route index element={<Comments/>} loader={commentsLoader}/>
     <Route path={ROUTES.USERS}  element={<Users/> } loader={usersLoader}/>
     <Route path={ROUTES.USER}  element={<User/> } />
     </Route>
    )
  );
  return <div>
    <RouterProvider router={router}/>
    
  </div>;
}
