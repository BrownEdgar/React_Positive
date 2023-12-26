import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Commoents from "./pages/Commoents";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users, { usersLoader } from "./pages/Users";
import Layouts from "./components/Layouts/Layouts";
import ROUTES from "./routes/routes";
import "./App.scss";
import User from "./pages/User";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.COMMENTS} element={<Layouts />}>
        <Route index element={<Commoents />} />
        <Route path={ROUTES.TODOS} element={<Todos />} />
        <Route path={ROUTES.USERS} element={<Users />} loader={usersLoader} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route path="*" element={<Navigate to={ROUTES.COMMENTS} />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
