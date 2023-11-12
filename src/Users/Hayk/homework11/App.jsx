import { Navigate, Route, Routes } from "react-router-dom";
import { COMMENTS, POSTS, TODOS, USERS } from "./routes/routes";
import NavBar from "./components/NavBar";
import Commoents from "./pages/Commoents";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import "./App.scss";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={COMMENTS} element={<Commoents />} />
        <Route path={POSTS} element={<Posts />} />
        <Route path={TODOS} element={<Todos />} />
        <Route path={USERS} element={<Users />} />
        <Route path="*" element={<Navigate to={COMMENTS} />} />
      </Routes>
    </div>
  );
}
