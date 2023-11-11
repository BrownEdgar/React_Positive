import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Blog from "./pages/Blog";
import Float from "./pages/Float";
import Home from "./pages/Home";
import ROUTES from "../routes/routes";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.FLOAT} element={<Float />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
      </Routes>
    </div>
  );
}
